const uname = document.getElementById("uname")
const surname = document.getElementById("surname")
const email = document.getElementById("email")
const reemail = document.getElementById("reemail")
const psw = document.getElementById("psw")
const repsw = document.getElementById("repsw")
const registerForm = document.getElementById("register-form")
const loginForm = document.getElementById("login-form")
const loginEmail = document.getElementById("login-email")
const loginPassword = document.getElementById("login-password")

const unameError = document.getElementById("uname-error")
const surnameError = document.getElementById("surname-error")
const emailError = document.getElementById("email-error")
const pswError = document.getElementById("psw-error")
const repswError = document.getElementById("repsw-error")

const unameContainer = document.getElementById("uname-container")
const surnameContainer = document.getElementById("surname-container")

const users = JSON.parse(localStorage.getItem("users")) || []

if (localStorage.getItem("currUser")) {
  location.href = "home.html"
}

function addUser (name, surname, email, password) {
  users.push({
    name,
    surname,
    email,
    password
  })

  localStorage.setItem("users", JSON.stringify(users))

  return { name, surname, email, password }
}

loginForm.onsubmit = (e) => {
  console.log(validateLogin())
  if (!validateLogin()) {
    e.preventDefault()
    alert("There is no user with these credentials")
  }
  const currUser = validateLogin()
  localStorage.setItem("currUser", JSON.stringify(currUser))
}

registerForm.onsubmit = (e) => {
  e.preventDefault()
  const isValid = validate()
  if (isValid) {
    addUser(
      uname.value,
      surname.value,
      email.value,
      psw.value
    )

    uname.value = ""
    surname.value = ""
    email.value = ""
    reemail.value = ""
    psw.value = ""
    repsw.value = ""
  }
}

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

  if (email.value !== reemail.value) {
    emailError.style.display = "inline-block"
    return false
  } else {
    emailError.style.display = "none"
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
  return true
}

function validateLogin () {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === loginEmail.value && users[i].password === loginPassword.value) {
      return users[i]
    }
  }
  return false
}