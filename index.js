const express = require("express"),
  morgan = require('morgan'),
  fs = require('fs'),
  path = require('path');

let uuid = require("uuid");
let movies = require("./mockapi/mockapi.js");
let Users = require("./mockapi/mock-user.js");

const app = express();


// Create a write stream (in append mode)
const accesLogStream = fs.createWriteStream(path.join(__dirname, "log.txt"), { flags: "a" });

// Setup the logger
app.use(morgan("combined", { stream: accesLogStream }));
app.use(express.json());

app.use(express.static("public"));


app.get("/movies", (req, res) => {
  res.json(movies)
});

// Get data about a single movie by title
app.get("/movies/:title", async (req, res) => {
  // Pull the title from the request parameters
  let { title } = req.params;
  try {
    // Find the movie in the array of movies
    let movie = movies.find((moive) => moive.Title === title);
    // If the movie is not found, return a 404 error
    if (!movie) {
      return res.status(404).send("Movie not found")
    }

    // If the movie is found, filter the array of
    // movies to only include the movie with the title
    movies = movies.filter((moive) => moive.Title === title)
    // Return the movie
    res.status(200).json(movie)

  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error")
  } finally {
    res.end();
  }
});

// Get data about a genre by name
app.get("/movies/genre/:genreName", (req, res) => {
  let { genreName } = req.params;

  let genre = movies.find(genre => genre.Genre.name === genreName).Genre;

  if (genre) {
    res.status(200).json(genre)
  } else {
    res.status(404).send("Genre not found")
  }
});

// Get data about a director by name
app.get("/movies/director/:directorName", (req, res) => {
  let { directorName } = req.params;

  let director = movies.find(genre => genre.Director.name === directorName).Director;

  if (director) {
    res.status(200).json(director)
  } else {
    res.status(404).send("Genre not found")
  }
});

app.get("/users", (req, res) => { 
  res.json(Users)
});


// Adds data for a new user to our list of users.
app.post("/users", (req, res) => {
  let newUser = req.body;

  if (!newUser.username || !newUser.email || !newUser.password) {
    return res.status(400).send("ALl fields are required")
  }

  newUser.id = uuid.v4();
  Users.push(newUser);
  return res.status(201).send(newUser);

});

//Add favorite movies to user favorite movies array list
app.post("/users/:username/:movieTitle", (req, res) => {
  let { username, movieTitle } = req.params;

  let user = Users.find(user => user.username === username);

  if (user) {
    user.favoriteMovies.push(movieTitle);
    res.status(201).json("Movie added to user favorite list successfully");
  }

  res.status(404).send("User not found");

});

// Update user data
app.put("/users/:username", (req, res) => {
  let { username } = req.params;
  let user = Users.find(user => user.username === username);

  if (user) {
    if (req.body.username) {
      user.username = req.body.username;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    if (req.body.password) {
      user.password = req.body.password;
    }

    return res.status(200).send("User updated successfully")
  } else {
    return res.status(401).send("Unauthorized")
  }

});

// Delete user data by username
app.delete("/users/:username", (req, res) => {
  let { username } = req.params;
  let user = Users.find(user => user.username === username);

  if (user) {
    Users = Users.filter(user => user.username !== username);
    return res.status(200).send("User deleted successfully")
  } else {
    return res.status(401).send("Unauthorized")
  } 
});
 
// Delete favorite movies from user favorite movies array list
app.delete("/users/:username/:movieTitle", (req, res) => {
  let { username, movieTitle } = req.params;
  let user = Users.find(user => user.username === username);

  if (user) {
    user.favoriteMovies = user.favoriteMovies.filter(movie => movie !== movieTitle);
    res.status(200).json("Movie removed from favorite list successfully");
  }

  res.status(404).send("User not found");
});


app.get("/documentation", (req, res) => {
  res.senFile("public/documentation.html")
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something is broken!")
});

app.listen(8080, () => {
  console.log("Server is running on port 8080")
});