const uname = "John"
const surname = "Newman"
let email = "john.newman@mail.com"
const profileInfoContainer = document.getElementsByClassName("profile-info-container")

if (!localStorage.getItem("currUser")) {
  location.href = "login.html"
}

function updateInfo () {
  profileInfoContainer[0].innerHTML = 
  `
    <p><strong>Name: </strong>${uname}</p>
    <p><strong>Surname: </strong>${surname}</p>
    <p><strong>Email: </strong>${email}</p>
  `
}

updateInfo()

function resetEmail () {
  let changedEmail = prompt("Change email")
  if(validEmail(changedEmail)) {
    email = changedEmail
    updateInfo()
  } else {
    alert("The email you entered is not a valid one!")
  }
}

function validEmail(email) {
  return String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}