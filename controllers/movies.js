const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);
// mongoose.connect('mongodb://localhost:27017/movieDB'); // for local testing

let Models = require("../model/models.js");

let Movies = Models.Movie;

// Get the list of all movies
async function getMovies(req, res) { 
  await Movies.find()
    .then(movies => res.status(200).json(movies))    
    .catch(err => {
      console.error(err);
      res.status(500).send("Internal Server Error")
    }).finally(() => {
      res.end();
    });
};

// Get data about a single movie by title
async function getMovieByTitle(req, res) {
  await Movies.findOne({ Title: req.params.title })
    .then(movie => {
      if (movie) {
        res.status(200).json(movie)
      } else {
        res.status(400).send("Movie not found")
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Error: " + err)
    });
};

// Get data about a genre by name
async function getGenreByName(req, res) { 
  await Movies.findOne({ "Genre.name": req.params.genreName })
    .then((genre) => {
      if (genre) {
        res.status(200).json(genre.Genre)
      } else {
        res.status(400).send("Genre not found")
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Error: " + err)
    });
};

// Get data about a director by name
async function getDirectorByName(req, res) {
  await Movies.findOne({ "Director.name": req.params.directorName })
    .then((director) => {
      if (director) {
        res.status(200).json(director.Director)
      } else {
        res.status(400).send("Director not found")
      }
    }).catch(err => {
      console.error(err);
      res.status(500).send("Error: " + err)
    });
};

module.exports = {
  getMovies,
  getMovieByTitle,
  getGenreByName,
  getDirectorByName
};