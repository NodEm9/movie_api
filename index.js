const express = require("express"),
  morgan = require('morgan'),
  fs = require('fs'),
  path = require('path'),
  cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const { check } = require('express-validator');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
// mongoose.connect('mongodb://localhost:27017/movieDB'); for local testing


let movies = require("./controllers/movies.js");
let users = require("./controllers/users.js");

const port = process.env.PORT || 3000;

// Create an instance of express
var app = express();

// Create a write stream (in append mode)
const accesLogStream = fs.createWriteStream(path.join(__dirname, "log.txt"), { flags: "a" });

// Setup the logger
app.use(morgan("combined", { stream: accesLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let auth = require("./controllers/auth/auth")(app);
let passport = require('passport');
require('./controllers/auth/passport');

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to Movie Oasis!")
});

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
  res.senFile("public")
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something is broken!")
}); 

// Listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`) 
});  

module.exports = app;