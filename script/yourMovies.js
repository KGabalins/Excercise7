const movieContainer = document.getElementById("movie-list-container")

if (!localStorage.getItem("currUser")) {
  location.href = "login.html"
}

function updateList () {
  const yourMovies = JSON.parse(localStorage.getItem("yourMovies"))
  let movieList = ""
  for (let i = 0; i < yourMovies.length; i++) {
    movieList += 
    `
      <div class="movie-items">
        <div class="movie-name"><p>${yourMovies[i].name}</p></div>
        <div class="movie-genre"><p>${yourMovies[i].genre}</p></div>
        <div class="movie-time">
          <button onclick="decreaseTime(this)">&lt;</button>
          <input type="text" class="time-text" value="12h" id="time-${i}" readonly>
          <button onclick="increaseTime(this)">&gt;</button>
        </div>
        <div class="movie-price"><p>${yourMovies[i].price}</p></div>
        <div class="remove-button-container">
          <button class="remove-button" id="${i}" onclick="removeMovie(this)">Remove</button>
        </div>
      </div>
    `
  }
  movieContainer.innerHTML = movieList
}

updateList()


function removeMovie(ev) {
  const availableMovies = JSON.parse(localStorage.getItem("availableMovies"))
  const yourMovies = JSON.parse(localStorage.getItem("yourMovies"))

  for (let movie in availableMovies) {
    if (availableMovies[movie].name === yourMovies[ev.id].name) {
      availableMovies[movie].inStock++
      yourMovies.splice(ev.id, 1)

      localStorage.setItem("availableMovies", JSON.stringify(availableMovies))
      localStorage.setItem("yourMovies", JSON.stringify(yourMovies))

      updateList()

      break
    }
  }
}

function decreaseTime(ev) {
  let parent = ev.parentNode
  let timeNode = null

  for (let i = 0; i < parent.childNodes.length; i++) {
    if (parent.childNodes[i].className === "time-text") {
      timeNode = parent.childNodes[i]
      break
    }
  }

  let value = Number(timeNode.value.substr(0, timeNode.value.length - 1))
  if (value !== 0) {
    value -= 12
  }

  timeNode.value = value + "h"
}

function increaseTime(ev) {
  let parent = ev.parentNode
  let timeNode = null

  for (let i = 0; i < parent.childNodes.length; i++) {
    if (parent.childNodes[i].className === "time-text") {
      timeNode = parent.childNodes[i]
      break
    }
  }

  let value = Number(timeNode.value.substr(0, timeNode.value.length - 1))
  if (value !== 168) {
    value += 12
  }

  timeNode.value = value + "h"
}