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

var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    }, 
    {
      title: "The Grinch",
      rating: "G",
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    }
] 
    var titlesContainer = document.querySelector("#Movietitles");
    var ratingContainer = document.querySelector("#movieRating");
    var moviePosterContainer = document.querySelector("#moviePoster");


    titlesContainer.innerHTML = movieSchedule.titles;
    ratingContainer.innerHTML = movieSchedule.rating;
    posterContainer.innerHTML = movieSchedule.moviePoster;

  var htmlString = `
    <h1 class="movieTitles">${movieSchedule.names}</h1>;
    <h2 class="movieRating">${movieSchedule.rating}</h2>;
    <h3 class="moviePoster">${movieSchedule.Movieposter}</h3>;
    <img class="movieImage" src=${movieSchedule.imageUrl} alt="Movie Poster"/>;
    `
