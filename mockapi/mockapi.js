let movies = [
  {
    id: 1,
    Title: "The Shawshank Redemption",
    Description: "Two imprisoned",
    Director: {
      name: "Frank Darabont",
      birth: "28 January 1959",
      bio: "Frank Darabont is a Hungarian-American film director, screenwriter and producer who has been nominated for three Academy Awards and a Golden Globe Award. He is best known for his film adaptations of Stephen King novels such as The Shawshank Redemption (1994), The Green Mile (1999), and The Mist (2007)."
    },
    Genre: {
      name: "Drama",
      description: "Drama is a category of narrative fiction intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre, such as soap opera (operatic drama), police crime drama, political drama, legal drama, historical drama, domestic drama, teen drama, and comedy-drama (dramedy). These terms tend to indicate a particular setting or subject-matter, or else they qualify the otherwise serious tone of a drama with elements that encourage a broader range of moods."
    },
    ReleaseDate: "14 October 1994",
    ImageUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    Rating: 9.3
  },
  {
    id: 2,
    Title: "The Godfather",
    Description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    Director: {
      name: "Francis Ford Coppola",
      birth: "7 April 1939",
      bio: "Francis Ford Coppola is an American film director, producer, and screenwriter. He was a central figure in the New Hollywood filmmaking movement of the 1960s and 1970s. He is widely considered to be one of the greatest filmmakers of all time."
    },
    Genre: {
      name: "Drama",
      description: "Crime films, in the broadest sense, are a cinematic genre inspired by and analogous to the crime fiction literary genre. Films of this genre generally involve various aspects of crime and its detection. Stylistically, the genre may overlap and combine with many other genres, such as drama or gangster film, but also include comedy, and, in turn, is divided into many sub-genres, such as mystery, suspense, or noir."
    },
    ReleaseDate: "24 March 1972",
    ImageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    Rating: 9.2
  },
  {
    id: 3,
    Title: "The Dark Knight",
    Description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    Director: {
      name: "Christopher Nolan",
      birth: "30 July 1970",
      bio: "Christopher Nolan is a British-American film director, producer, and screenwriter. He is one of the highest-grossing directors in history, and among the most successful and acclaimed filmmakers of the 21st century. His films have earned over US$5 billion worldwide and garnered a total of 34 Oscar nominations and ten wins."
    },
    Genre: {
      name: "Crime",
      description: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases. Action films tend to feature a resourceful hero struggling against incredible odds, which include life-threatening situations, a villain, or a pursuit which usually concludes in victory for the hero."
    },
    ReleaseDate: "18 July 2008",
    ImageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
    Rating: 9.0
  },
  {
    id: 4,
    Title: "The Godfather: Part II",
    Description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    Director: {
      name: "Francis Ford Coppola",
      birth: "7 April 1939",
      bio: "Francis Ford Coppola is an American film director, producer, and screenwriter. He was a central figure in the New Hollywood filmmaking movement of the 1960s and 1970s. He is widely considered to be one of the greatest filmmakers of all time."
    },
    Genre: {
      name: "Crime",
      description: "Crime films, in the broadest sense, are a cinematic genre inspired by and analogous to the crime fiction literary genre. Films of this genre generally involve various aspects of crime and its detection. Stylistically, the genre may overlap and combine with many other genres, such as drama or gangster film, but also include comedy, and, in turn, is divided into many sub-genres, such as mystery, suspense, or noir."
    },
    ReleaseDate: "20 December 1974",
    ImageUrl: "https://upload.wikimedia.org/wikipedia/en/0/03/Godfather_part_ii.jpg",
    Rating: 9.0
  },
  {
    id: 5,
    Title: "Harry Potter and the Deathly Hallows: Part 2",
    Description: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    Director: {
      name: "David Yates",
      birth: "8 October 1963",
      bio: "David Yates is an English filmmaker who has directed feature films, short films, and television productions. He is best known for directing the final four films in the Harry Potter film series."
    },
    Genre: {
      name: "Fantasy",
      description: "Adventure films are a genre of film that typically use their action scenes to display and explore exotic locations in an energetic way. The subgenres of adventure films include swashbuckler film, disaster films, and historical dramas—which is similar to the epic film genre. Main plot elements include quests for lost continents, a jungle, mountain, island, urban and/or desert settings, characters going on a treasure hunts and heroic journeys for the unknown. Adventure films are mostly set in a period background and may include adapted stories of historical or fictional adventure heroes within the historical context."
    },
    ReleaseDate: "15 July 2011",
    ImageUrl: "https://upload.wikimedia.org/wikipedia/en/d/df/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2.jpg",
    Rating: 8.1
  },
  {
    id: 6,
    Title: "The Lord of the Rings: The Return of the King",
    Description: "Gandalf and Aragorn lead the World",
    Director: {
      name: "Peter Jackson",
      birth: "31 October 1961",
      bio: "Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter, and film producer. He is best known as the director, writer, and producer of the Lord of the Rings trilogy (2001–03) and the Hobbit trilogy (2012–14), both of which are adapted from the novels of the same name by J. R. R. Tolkien."
    },
    Genre: {
      name: "Drama",
      description: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases. Action films tend to feature a resourceful hero struggling against incredible odds, which include life-threatening situations, a villain, or a pursuit which usually concludes in victory for the hero."
    },
    ReleaseDate: "17 December 2003",
    ImageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9d/Lord_of_the_Rings_-_The_Return_of_the_King.jpg",
    Rating: 8.9
  },
  {
    id: 7,
    title: "Inception",
    Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: {
      name: "Christopher Nolan",
      birth: "30 July 1970",
      bio: "Christopher Nolan is a British-American film director, producer, and screenwriter. He is one of the highest-grossing directors in history, and among the most successful and acclaimed filmmakers of the 21st century. His films have earned over US$5 billion worldwide and garnered a total of 34 Oscar nominations and ten wins."
    },
    Genre: {
      name: "Action",
      description: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases. Action films tend to feature a resourceful hero struggling against incredible odds, which include life-threatening situations, a villain, or a pursuit which usually concludes in victory for the hero."
    },
    releaseDate: "16 July 2010",
    ImageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
    rating: 8.8
  },
  {
    id: 8,
    title: "The Matrix",
    Description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    director: {
      name: "Lana Wachowski, Lilly Wachowski",
      birth: "21 June 1965, 29 December 1967",
      bio: "Lana Wachowski and Lilly Wachowski are American film and television directors, writers and producers. The sisters work includes Bound (1996), The Matrix franchise (1999–present), V for Vendetta (2005), Speed Racer (2008), Cloud Atlas (2012), and Jupiter Ascending (2015)."
    },
    Genre: {
      name: "Sci-Fi",
      description: "Science fiction (sometimes shortened to sci-fi or SF) is a genre of speculative fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. It has been called the 'literature of ideas', and often explores the potential consequences of scientific, social, and technological innovations."
    },
    releaseDate: "31 March 1999",
    ImageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    rating: 8.7
  },
  {
    id: 9,
    title: "The Avengers",
    Description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    director: {
      name: "Joss Whedon",
      birth: "23 June 1964",
      bio: "Joseph Hill Whedon is an American film director, producer, writer, and composer. He is the founder of Mutant Enemy Productions and co-founder of Bellwether Pictures, and is best known as the creator of several television series. These include Buffy the Vampire Slayer (1997–2003), Angel (1999–2004), Firefly (2002), Dollhouse (2009–2010), and Agents of S.H.I.E.L.D. (2013–2020)."
    },
    Genre: {
      name: "Action",
      description: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases. Action films tend to feature a resourceful hero struggling against incredible odds, which include life-threatening situations, a villain, or a pursuit which usually concludes in victory for the hero."
    },
    releaseDate: "4 May 2012",
    ImageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg",
    rating: 8.0
  },
  {
    id: 10,
    title: "Interstellar",
    Description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: {
      name: "Christopher Nolan",
      birth: "30 July 1970",
      bio: "Christopher Nolan is a British-American film director, producer, and screenwriter. He is one of the highest-grossing directors in history, and among the most successful and acclaimed filmmakers of the 21st century. His films have earned over US$5 billion worldwide and garnered a total of 34 Oscar nominations and ten wins."
    },
    Genre: {
      name: "Adventure",
      description: "Adventure films are a genre of film that typically use their action scenes to display and explore exotic locations in an energetic way. The subgenres of adventure films include swashbuckler film, disaster films, and historical dramas—which is similar to the epic film genre. Main plot elements include quests for lost continents, a jungle, mountain, island, urban and/or desert settings, characters going on a treasure hunts and heroic journeys for the unknown. Adventure films are mostly set in a period background and may include adapted stories of historical or fictional adventure heroes within the historical context."
    },
    releaseDate: "7 November 2014",
    ImageUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    rating: 8.6
  }
];

module.exports = movies;