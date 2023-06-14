const mainSection = document.getElementById("main-section")
const rentBtn = document.getElementsByClassName("rent-button")
const yourMovies = []

function Movie (name, genre, price, inStock) {
  this.name = name,
  this.genre = genre,
  this.price = price,
  this.inStock = inStock
  this.buy = function () {
    if (this.inStock > 0) {
      this.inStock--
    }
  }
}

console.log(rentBtn)

const movie1 = new Movie("Batman", "Action", 4.99, 0)
const movie2 = new Movie("The Godfather", "Thriller", 3.99, 4)
const movie3 = new Movie("The Dark Knight", "Action and adventure", 5.99, 2)
const movie4 = new Movie("Jaws", "Action", 2.99, 1)
const movie5 = new Movie("Star Wars", "Science fiction", 7.99, 0)
const movie6 = new Movie("Toy Story", "Animation", 4.99, 2)
const movie7 = new Movie("Die Hard", "Action and adventure", 3.99, 5)
const movie8 = new Movie("Boyhood", "Drama", 5.99, 4)

const movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8]

for(let x = 0; x < movies.length; x++){
  let imageName = "check"
  if(movies[x].inStock === 0) {
    imageName = "cross"
  }
  mainSection.innerHTML += 
  `
  <div class="movie-items">
    <div class="movie-name"><p>${movies[x].name}</p></div>
    <div class="movie-genre"><p>${movies[x].genre}</p></div>
    <div class="movie-price"><p>${movies[x].price}</p></div>
    <div class="stock-image"><img id="img-${x}" src="icons/${imageName}.png" class="check-img"><p id="text-${x}">${movies[x].inStock}</p></div>
    <div class="rent-button-container"><button class="rent-button" onclick="rent(this)" id="${x}">Rent</button></div>
  </div>
  `
}

function rent(btn) {
  let id = btn.id
  if (movies[id].inStock > 0) {
    movies[id].buy()
    document.getElementById("text-" + id).innerHTML = movies[id].inStock
    yourMovies.push(movies[id])
    localStorage.setItem("yourMovies", JSON.stringify(yourMovies))

    if (movies[id].inStock === 0) {
      document.getElementById("img-" + id).src = "icons/cross.png"
    }
  } else {
    alert("No movies in stock")
  }

  console.log(yourMovies)
}