const express = require("express"),
  morgan = require('morgan'),
  fs = require('fs'),
  path = require('path');

const app = express();

let movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    genre: "Drama",
    releaseDate: "14 October 1994",
    rating: 9.3
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    genre: "Crime, Drama",
    releaseDate: "24 March 1972",
    rating: 9.2
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    genre: "Action, Crime, Drama",
    releaseDate: "18 July 2008",
    rating: 9.0
  },
  {
    id: 4,
    title: "The Godfather: Part II",
    director: "Francis Ford Coppola",
    genre: "Crime, Drama",
    releaseDate: "20 December 1974",
    rating: 9.0
  },
  {
    id: 5,
    title: "Harry Potter and the Deathly Hallows: Part 2",
    director: "David Yates",
    genre: "Adventure, Drama, Fantasy",
    releaseDate: "15 July 2011",
    rating: 8.1
  },
  {
    id: 6,
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    genre: "Adventure, Drama, Fantasy",
    releaseDate: "17 December 2003",
    rating: 8.9
  },
  {
    id: 7,
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Action, Adventure, Sci-Fi",
    releaseDate: "16 July 2010",
    rating: 8.8
  },
  {
    id: 8,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    genre: "Action, Sci-Fi",
    releaseDate: "31 March 1999",
    rating: 8.7
  },
  {
    id: 9,
    title: "The Avengers",  
    director: "Joss Whedon",
    genre: "Action, Adventure, Sci-Fi",
    releaseDate: "4 May 2012",
    rating: 8.0
  },
  {
    id: 10,
    title: "Interstellar",
    director: "Christopher Nolan",
    genre: "Adventure, Drama, Sci-Fi",
    releaseDate: "7 November 2014",
    rating: 8.6
  }
];

// Create a write stream (in append mode)
const accesLogStream = fs.createWriteStream(path.join(__dirname, "log.txt"), { flags: "a" });

// Setup the logger
app.use(morgan("combined", { stream: accesLogStream }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome To Movie API ")
});

app.get("/movies", (req, res) => {
  res.json(movies)
});

app.get("/documentation", (req, res) => {
  res.senFile("public/documentation.html")
})

app.use((err, req, res, next) => { 
  console.error(err.stack);
  res.status(500).send("Something is broken!")
});

app.listen(8080, () => {
  console.log("Server is running on port 8080")
});