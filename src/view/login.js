import { passlogin } from "../lib/firebase.js";
import { wall } from "./muro.js";

export const logIn = () => {
 // history.pushState(null, login, '/login')

 window.location.hash = '#/login'

 const divlogin = document.createElement("div");
 const login = document.createElement("div");
  
    let headerdiv = document.createElement("div")
    let logo = document.createElement("img")
    
    headerdiv.setAttribute("class", "headerdiv")
    divlogin.setAttribute("class", "divlogin")
    logo.setAttribute("src", "https://64.media.tumblr.com/9759038804c96b09f26666eda4ce9e5e/f80f47decba8e47b-06/s1280x1920/4cfe6992b169e9bd3d5c7fc7b388f798aaa9ab82.png")
    logo.setAttribute("class", "logo")
    
    divlogin.appendChild(headerdiv)
    headerdiv.appendChild(logo)
    divlogin.appendChild(login)
    
  
    //
  
    let formlogin = document.createElement("form")
    formlogin.setAttribute("class", "login")
    login.appendChild(formlogin)
  
    let emailInput = document.createElement("input")
    emailInput.setAttribute("type", "email")
    emailInput.setAttribute("class", "emaillogin")
    emailInput.setAttribute("id", "emaillogin")
    emailInput.setAttribute("placeholder", "ejemplo@email.com")
    formlogin.appendChild(emailInput)
  
    let passwordInput = document.createElement("input")
    passwordInput.setAttribute("type", "password")
    passwordInput.setAttribute("class", "passwordlogin")
    passwordInput.setAttribute("id", "passwordlogin")
    passwordInput.setAttribute("placeholder", "contraseña")
    formlogin.appendChild(passwordInput)
  
    let buttonlogin = document.createElement("input")
    buttonlogin.setAttribute("value", "Login")
    buttonlogin.setAttribute("class", "buttonlogin")
    buttonlogin.setAttribute('id', 'buttonlogin')
    formlogin.appendChild(buttonlogin)

    let loginbutton = divlogin.querySelector('#buttonlogin')
    loginbutton.addEventListener('click', () =>{
    passlogin()

  }) 

  let wallbutton = divlogin.querySelector("#buttonlogin")
  wallbutton.addEventListener("click", () =>{
    wall()
  }); 

    
    return divlogin;

  };

  

