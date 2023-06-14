const uname = document.getElementById("uname")
const surname = document.getElementById("surname")
const psw = document.getElementById("psw")
const repsw = document.getElementById("repsw")

const unameError = document.getElementById("uname-error")
const surnameError = document.getElementById("surname-error")
const pswError = document.getElementById("psw-error")
const repswError = document.getElementById("repsw-error")

const unameContainer = document.getElementById("uname-container")
const surnameContainer = document.getElementById("surname-container")


function validate() {
  if (uname.value.length < 2) {
    unameError.style.display = "inline-block"
    return false
  } else {
    unameError.style.display = "none"
  }

  if (surname.value.length > 0 && surname.value.length < 2) {
    surnameError.style.display = "inline-block"
    return false
  } else {
    surnameError.style.display = "none"
  }

  if (psw.value.length < 8) {
    pswError.style.display = "inline-block"
    return false
  } else {
    pswError.style.display = "none"
  }

  if (repsw.value !== psw.value) {
    repswError.style.display = "inline-block"
    return false
  } else {
    repswError.style.display = "none"
  }
}