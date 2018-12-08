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
    var movieContainer = document.querySelector("#movie");
    var ratingContainer = document.querySelector("#rating");
    var moviePosterContainer = document.querySelector("#poster");

    movieContainer.innerHTML = movieSchedule.movie;
    ratingContainer.innerHTML = movieSchedule.rating;
    posterContainer.innerHTML = movieSchedule.moviePoster;

    var htmlString = `
        <h1 class="movie">${movieSchedule.movie}</h1>;
        <h2 class="rating">${movieSchedule.rating}</h2>;
        <h3 class="poster">${movieSchedule.poster}</h3>;
        <img class="movieImage" src=${movieSchedule.imageUrl} alt="Movie Poster"/>;
    `