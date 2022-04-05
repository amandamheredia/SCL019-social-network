import { logIn } from "../view/login.js"
import { register } from "../view/register.js";

export const bienvenida = () => { 
 // history.pushState(null, bienvenida, '/bienvenida')

window.location.hash = '#/bienvenida'

const divbienvenida = document.createElement("div");
const headerbienvenida = document.createElement("div");
 
let headerdiv = document.createElement("div")
let logo = document.createElement("img")

  headerdiv.setAttribute("class", "headerdiv")
  headerbienvenida.setAttribute("class", "headerbienvenida")
  logo.setAttribute("src", "https://64.media.tumblr.com/1d10f4ec84996baa39b0596fea6cf9b9/af54d9a3b6c9944e-38/s1280x1920/f70dc82d02ac75d53b6ad9ae76a76d06e075f9f6.png")
  logo.setAttribute("class", "logo")
  
  headerbienvenida.appendChild(headerdiv)
  headerdiv.appendChild(logo)

  //

  const bienvenida = document.createElement("h2")
  bienvenida.setAttribute("class", "welcoming")
  bienvenida.innerHTML = 'Esta es una red social pensada para que mujeres lesbianas y bisexuales creen una comunidad.' + ' Es un espacio seguro para que compartas tus opiniones, datos, anécdotas y más.'
  headerbienvenida.appendChild(bienvenida)

  const entrybutton = document.createElement('button')
 
  entrybutton.setAttribute('type', 'button')
  entrybutton.setAttribute('class', 'entrybutton')
  entrybutton.setAttribute('id', 'entrybutton')
  entrybutton.innerHTML = "¡Quiero ser parte!"

  headerbienvenida.appendChild(entrybutton)
  divbienvenida.appendChild(headerbienvenida)
   
  //

  let ebutton = divbienvenida.querySelector('#entrybutton')
  ebutton.addEventListener('click', () => {
  register()
  }); 



  return divbienvenida;

};

