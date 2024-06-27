const express = require("express"),
  morgan = require("morgan"),
  fs = require("fs"),
  path = require("path"),
  cors = require("cors");


const mongoose = require("mongoose");

const allowedOrigins = [
  "https://my-flix-app-three.vercel.app",
  "https://myflix-movieoasis.netlify.app",
  "http://localhost:8080",
  "http://localhost:1234"
];


mongoose.connect(process.env.MONGO_URI, { dbName: "movieDB" });

const { check } = require("express-validator"); 

let movies = require("./controllers/movies.js");
let users = require("./controllers/users.js"); 

const port = process.env.PORT || 8080; /* eslint no-undef: off */

// Create an instance of express
var app = express();

// Create a write stream (in append mode)
const accesLogStream = fs.createWriteStream(path.join(__dirname, "log.txt"), { flags: "a" });

// Setup the logger
app.use(morgan("combined", { stream: accesLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true) 
    } else {
      var msg = "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
  },
  optionsSuccessStatus: 200
}));

require("./controllers/auth/auth")(app); /* eslint no-unused-vars: off */
let passport = require("passport");
require("./controllers/auth/passport");

app.use(express.static("public"));

// Movies routes
app.get("/movies", passport.authenticate("jwt", { session: false }), movies.getMovies);
app.get("/movies/:title", passport.authenticate("jwt", { session: false }), movies.getMovieByTitle);
app.get("/movies/genre/:genreName", passport.authenticate("jwt", { session: false }), movies.getGenreByName);
app.get("/movies/director/:directorName", passport.authenticate("jwt", { session: false }), movies.getDirectorByName);

// Users routes
app.get("/users", passport.authenticate("jwt", { session: false }), users.getUsers);

app.post("/users", [
  check("Username", "Username is required").isLength({ min: 5 }),
  check("Username", "Username contains non alphanumeric characters - not allowed").isAlphanumeric(),
  check("Password", "Password is required").not().isEmpty(),
  check("Email", "Email does not appear to be valid").isEmail()
], users.addUser);

app.get("/users/:Username", passport.authenticate("jwt", { session: false }), users.getUserByUsername);

app.put("/users/:Username", [
  check("Username", "Username is required").isLength({ min: 5 }),
  check("Username", "Username contains non alphanumeric characters - not allowed").isAlphanumeric(),
  check("Password", "Password is required").not().isEmpty(),
  check("Email", "Email does not appear to be valid").isEmail()
], passport.authenticate("jwt", { session: false }),
  users.updateUser);

app.post("/users/:Username/movies/:MovieID", passport.authenticate("jwt", { session: false }), users.addFavoriteMovie);
app.delete("/users/:Username", passport.authenticate("jwt", { session: false }), users.deleteUser);
app.delete("/users/:Username/movies/:MovieID", passport.authenticate("jwt", { session: false }), users.removeFavoriteMovie);


// Get the documentation
app.get("/documentation", (req, res) => {
  res.sendFile("public")
});

// Error handling
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500).send("Something is broken!")
  res.render('error', { error: err })
}

// Error handling middleware
app.use(errorHandler);

// Listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});

module.exports = app;