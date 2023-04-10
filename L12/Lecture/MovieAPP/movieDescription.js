const CartMovies = localStorage.getItem("SingleMovies");
const CartMoviesObj = JSON.parse(CartMovies);

const IMG_PATH = `https://image.tmdb.org/t/p/w1280${CartMoviesObj.Poster}`;

const MovieDescription = document.getElementById("MovieDescription");

function ShowMovie() {
  MovieDescription.innerHTML = `
        <div class= "container">
            <div class="row">
                <div class="col-12">
                    <img src="${IMG_PATH}" alt="Movie Poster" class="img-fluid"/>
                </div>
                <div class="col-12">
                    <h1>${CartMoviesObj.Title}</h1>    
            </div>
            <p>${CartMoviesObj.Overview}</p>
            <p>${CartMoviesObj.Rating}</p>
            <p>${CartMoviesObj.Count}</p>
        </div>
        `;
}

ShowMovie();
