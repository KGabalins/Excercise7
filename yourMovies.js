const yourMovies = JSON.parse(localStorage.getItem("yourMovies"))
const mainSection = document.getElementById("main-section")

for (let i = 0; i < yourMovies.length; i++) {
  mainSection.innerHTML += 
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
        <button class="remove-button">Remove</button>
      </div>
    </div>
  `
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