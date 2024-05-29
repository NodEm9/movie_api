const mongoose = require('mongoose');

// Create a schema for the movies
const movieSchema = mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Genre: {
    name: String,
    description: String
  },
  Director: {
    name: String,
    bio: String,
    birthyear: Date
  },
  Actors: [String],
  ReleaseDate: Date,
  ImagePath: String,
  Rating: Number,
  Featured: Boolean
});

// Create a schema for the users
const userSchema = mongoose.Schema({
  Username: {
    type: String, 
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  birthday: Date,
  Role: {
    type: String,
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: Date,
  favoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});


// Create models for the movies and users
let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model("users", userSchema);

module.exports.Movie = Movie;
module.exports.User = User;