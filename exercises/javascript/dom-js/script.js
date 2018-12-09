var movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977"
  }

var titleContainer = document.querySelector("#title");
var genreContainer = document.querySelector("#genre");
var releaseContainer = document.querySelector("#releaseDate");

titleContainer.innerHTML = movieObject.title;
genreContainer.innerHTML = movieObject.genre;
releaseContainer.innerHTML = movieObject.releaseDate;
