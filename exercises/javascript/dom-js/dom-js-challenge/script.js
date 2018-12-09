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
var htmlString = `

<h3 class ="title">${movieSchedule[0].title}</h3>

<p class = "rating">Rated: ${movieSchedule[0].rating}<p>

<img class = "movie-poster" src=${movieSchedule[0].poster} alt = Movie Poster"/>

<br/>

<h3 class ="title">${movieSchedule[1].title}</h3>

<p class = "rating">Rated: ${movieSchedule[1].rating}<p>

<img class = "movie-poster" src=${movieSchedule[1].poster} alt = Movie Poster"/>

<br/>

<h3 class ="title">${movieSchedule[2].title}</h3>

<p class = "rating">Rated: ${movieSchedule[2].rating}<p>

<img class = "movie-poster" src=${movieSchedule[2].poster} alt = Movie Poster"/>
`

document.querySelector("#movie-schedule").innerHTML = htmlString;

alert("herro");