import { logingoogle } from "../lib/firebase.js"
import { logIn } from "./login.js";
import { passregister } from "../lib/firebase.js";

export const register = () => {
//history.pushState(null, register, '/register')
  window.location.hash = '#/register';

  const divregister = document.createElement("div");
  const divsignup = document.createElement("div");
  
  let headerdiv = document.createElement("div")
  let logo = document.createElement("img")
    
  
  headerdiv.setAttribute("class", "headerdiv")
  divregister.setAttribute("class", "divregister")
  logo.setAttribute("src", "https://64.media.tumblr.com/9759038804c96b09f26666eda4ce9e5e/f80f47decba8e47b-06/s1280x1920/4cfe6992b169e9bd3d5c7fc7b388f798aaa9ab82.png")
  logo.setAttribute("class", "logo")
  
  divregister.appendChild(headerdiv)
  headerdiv.appendChild(logo)
  divregister.appendChild(divsignup)
  
 

  //

  let formSignUp = document.createElement("form")
  formSignUp.setAttribute("class", "signup")
  divsignup.appendChild(formSignUp)

  let emailInput = document.createElement("input")
  emailInput.setAttribute("type", "email")
  emailInput.setAttribute("id", "email")
  emailInput.setAttribute("class", "email")
  emailInput.setAttribute("placeholder", "ejemplo@email.com")
  emailInput.setAttribute("required", "")
  formSignUp.appendChild(emailInput)
  //error mail
  // let emailError = document.createElement("span");
  // emailError.setAttribute("class", "errorcorreo");
  // formSignUp.appendChild(emailError);

  let passwordInput = document.createElement("input")
  passwordInput.setAttribute("type", "password")
  passwordInput.setAttribute("id", "password")
  passwordInput.setAttribute("class", "password")
  passwordInput.setAttribute("placeholder", "contraseña")
  passwordInput.setAttribute("required", "")
  formSignUp.appendChild(passwordInput)


  //error contraseña
  let passError = document.createElement("span");
   passError.setAttribute("class", "errorpass");
   formSignUp.appendChild(passError);

  let userName = document.createElement("input");
  userName.setAttribute("type", "text");
  userName.setAttribute("placeholder", "nombre de usuario");
  userName.setAttribute("id", "userName");
  userName.setAttribute("class", "userName");
  userName.setAttribute("required", "");
  formSignUp.appendChild(userName);

  let buttonregister = document.createElement("input")
  buttonregister.setAttribute("type", "submit")
  buttonregister.setAttribute("value", "Regístrate")
  buttonregister.setAttribute("class", "buttonregister")
  buttonregister.setAttribute('id', 'buttonregister')
  formSignUp.appendChild(buttonregister)


  let logintext = document.createElement('p')
  logintext.setAttribute('class', 'logintext')
  logintext.innerHTML = '¿Ya tienes una cuenta?'
  divregister.appendChild(logintext)

  const logbuttonin = document.createElement('button')
  logbuttonin.setAttribute('type', 'button')
  logbuttonin.setAttribute('class', 'logbuttonin')
  logbuttonin.setAttribute('id', 'logbuttonin')
  logbuttonin.innerHTML = 'Ingresar'
  divregister.appendChild(logbuttonin)

  let buttonl = divregister.querySelector('#logbuttonin')
  buttonl.addEventListener('click', () =>{
    logIn()

  })

  let buttongoogle = document.createElement('button')
    buttongoogle.setAttribute('type', 'button')
    buttongoogle.setAttribute('class', 'buttongoogle')
    buttongoogle.setAttribute('id', 'buttongoogle')
    buttongoogle.innerHTML = 'Ingresar con google'
    divregister.appendChild(buttongoogle)

 let buttong = divregister.querySelector('#buttongoogle') 
 buttong.addEventListener('click', () =>{
   logingoogle()
})

let buttonCreateuser = divregister.querySelector('#buttonregister')
buttonCreateuser.addEventListener('click', () =>{
  passregister()
})

  return divregister;

};



