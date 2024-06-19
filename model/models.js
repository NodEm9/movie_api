const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
  birthday: {
    type: Date,
    required: true
  },
  Role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: Date,
  favoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};  

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.Password);
 };

// Create models for the movies and users
let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model("users", userSchema);

module.exports.Movie = Movie;
module.exports.User = User;