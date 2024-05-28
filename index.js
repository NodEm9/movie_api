const express = require("express"),
  morgan = require('morgan'),
  fs = require('fs'),
  path = require('path');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieDB');
// Connect to the database
let Models = require('./model/models.js');

let Movies = Models.Movie;
let Users = Models.User;


// Create an instance of express
var app = express();

// Create a write stream (in append mode)
const accesLogStream = fs.createWriteStream(path.join(__dirname, "log.txt"), { flags: "a" });

// Setup the logger
app.use(morgan("combined", { stream: accesLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Get the list of all movies
app.get("/movies", async (req, res) => {
  await Movies.find().then(movies => res.status(200).json(movies))
    .catch(err => {
      console.error(err);
      res.status(500).send("Internal Server Error")
    }).finally(() => {
      res.end();
    });
});

// Get data about a single movie by title
app.get("/movies/:title", async (req, res) => {
  await Movies.findOne({ Title: req.params.title })
    .then(movie => {
      if (movie) {
        res.status(200).json(movie)
      } else {
        res.status(404).send("Movie not found")
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Error: " + err)
    });
});
 
// Get data about a genre by name
app.get("/movies/genre/:genreName", (req, res) => {
  Movies.findOne({ "Genre.name": req.params.genreName })
    .then((genre) => {
      if (genre) {
        res.status(200).json(genre.Genre)
      } else {
        res.status(404).send("Genre not found")
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Error: " + err)
    });
});

// Get data about a director by name
app.get("/movies/director/:directorName",async (req, res) => {
  await Movies.findOne({ "Director.name": req.params.directorName })
    .then((director) => {
      if (director) {
        res.status(200).json(director.Director)
      } else { 
        res.status(404).send("Director not found")
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Error: " + err)
    });
});

// Get all users in the database
app.get("/users", async (req, res) => {
  await Users.find()
    .then(users => {
      res.status(200).json(users)
    }).catch(err => {
      console.error(err);
      res.status(500).send("Error: " + err)
  })
});


// Adds data for a new user to our list of users.
app.post("/users", async (req, res) => {
  await Users.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        res.status(400).send("This " + req.body.email + " already exists");
      } else {
        Users.create({
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          birthday: req.body.birthday,
          role: req.body.role,
        }).then(user => {
          res.status(201).json(user)
        }).catch(err => {
          console.error(err);
          res.status(500).send("Error: " + err) 
        });
    }
  }).catch(err => {
    console.error(err);
    res.status(500).send("Error: " + err)
  });
});

// Get a user by username
app.get("/users/:username", async(req, res) => { 
  await Users.findOne({ username: req.params.username })
    .then(user => {
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).send("User not found")
      }
    }).catch(err => {
      console.error(err);
      res.status(500).send("Error: " + err)
    });
});
    
//Add favorite movies to user favorite movies array list
app.post("/users/:username/movies/:MovieID", async (req, res) => {
  await Users.findOneAndUpdate({ username: req.params.username }, {
    $push: { favoriteMovies: req.params.MovieID }
  }, { new: true } /** This line makes sure that the updated document is returned **/)
    .then((updateUdser) => {
      res.json(updateUdser)
    }).catch(err => {
      console.error(err);
      res.status(500).send("Error: " + err)
    });
});
  
// Update user data
app.put("/users/:username", async (req, res) => {
  await Users.findOneAndUpdate({ username: req.params.username }, {
    $set: {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      birthday: req.body.birthday,
      role: req.body.role,
    }
  }, { new: true } /** This line makes sure that the updated document is returned **/)
    .then((updateUser) => {
    res.json(updateUser)
  }).catch(err => {
    console.error(err);
    res.status(500).send("Error: " + err)
  });
});

// Delete user data by username
app.delete("/users/:username", async (req, res) => {
  await Users.findOneAndDelete({ username: req.params.username }).then((user) => {
      if (!user) {
      res.status(404).send(req.params.username + " was not found");
      }else {
        res.status(200).send(req.params.username + " was deleted.");
      }
    })
  .catch(err => { 
    console.error(err);
    res.status(500).send("Error: " + err)
  }); 
});

// Delete favorite movies from user favorite movies array list
app.delete("/users/:username/movies/:MovieID", async (req, res) => {
  await Users.findOneAndUpdate({ username: req.params.username }, {
    $pull: { favoriteMovies: req.params.MovieID }
  }, { new: true } /** This line makes sure that the updated document is returned **/)
    .then((updateUser) => {
      res.json(updateUser)
    }).catch(err => {
      console.error(err);
      res.status(500).send("Error: " + err)
    });
});


// Get the documentation
app.get("/documentation", (req, res) => {
  res.senFile("public/documentation.html")
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something is broken!")
});

// Listen for requests
app.listen(8080, () => {
  console.log("Server is running on port 8080")
});