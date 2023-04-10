// const API_URL =
//   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
// const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCH_API =
//   'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

// const main = document.getElementById("main");

// getMovies(API_URL);
// async function getMovies(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   showMovies(data.results);
// }

// function showMovies(movie) {
//   console.log(movie);
//   main.innerHTML = "";
//   movie.forEach((movies) => {
//     const movieEl = document.cr eateElement("div");
//     movieEl.classList.add("col-4");
//     movieEl.innerHTML = `
//         <div class="card bg-dark text-white mt-5" >
//                 <img class="card-img" src="${
//                   IMG_PATH + movies.poster_path
//                 }" alt="Card image">
//                 <div class="card-img-overlay">
//                     <h5 class="card-title"> ${movies.title}</h5>
//                     <p class="card-text">  ${movies.overview}</p>
//                     <p class="card-text">Last updated 3 mins ago</p>
//             </div>
//         </div>
//         `;
//     main.appendChild(movieEl);
//     movieEl.addEventListener("click", () => {
//       const SingleMovies = {
//         Id: movies.id,
//         Title: movies.title,
//         Overview: movies.overview,
//         Poster: movies.poster_path,
//         Rating: movies.vote_average,
//         Count: movies.vote_count,
//       };
//       localStorage.setItem(
//         `SingleMovies`,
//         JSON.stringify(SingleMovies)
//       );
//     });
//   });
// }

// const Cart = document.getElementById("CartItems");
// const CartMovies = localStorage.getItem(`SingleMovies`);
// const CartMoviesObj = JSON.parse(CartMovies);
// console.log(CartMoviesObj);
// const CartImg = `https://image.tmdb.org/t/p/w1280`;
// console.log(CartImg);
// ShowCart();
// function ShowCart() {
//         if (CartMoviesObj == null) {
//             Cart.innerHTML = `
//             <div class="container">
//             <div class="row">
//                 <div class="col-12">
//                     <h1>Cart is empty</h1>
//                 </div>
//             </div>
//             </div>
//             `;
//         } else {

//   Cart.innerHTML = `
//     <a href="movie.html?${CartMoviesObj.Id}" class="btn btn-primary">
//                 <div class="row">
//                 <div class="col-4">
//                 <img src="${CartImg + CartMoviesObj.Poster}" alt="Movie Poster" class="img-fluid"/>
//                 </div>
//                 <div class="col-8">
//                 <h1>${CartMoviesObj.Title}</h1>    
//                     <p>${CartMoviesObj.Overview}</p>
//                 </div>
//             </div>
//             </a>
//             `;
//         }
// }