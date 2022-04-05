import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { app, db, auth } from "../lib/firebase.js";
import { collection, addDoc, Timestamp, query, orderBy, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"

export const wall = () =>{
  //history.pushState(null, muro, '/muro' )
window.location.hash = '#/wall'

//VISTA MURO
   const containerwall = document.createElement('div')
   const headerwall = document.createElement('div')

   containerwall.setAttribute('class', 'containerwall')
   containerwall.setAttribute('id', 'containerwall')
   headerwall.setAttribute('class', 'headerwall')
   headerwall.setAttribute('id', 'headerwall')

   let logo = document.createElement("img")
   logo.setAttribute("src", "https://64.media.tumblr.com/9759038804c96b09f26666eda4ce9e5e/f80f47decba8e47b-06/s1280x1920/4cfe6992b169e9bd3d5c7fc7b388f798aaa9ab82.png")
   logo.setAttribute("class", "logo")

   //BOTON LOGOUT

   const botonLogOut = document.createElement("button")
   botonLogOut.setAttribute('type', 'button')
   botonLogOut.setAttribute('class', 'fa fa-sign-out')
   botonLogOut.setAttribute('id', 'botonLogOut')
  
   containerwall.appendChild(headerwall)
   headerwall.appendChild(logo)
   headerwall.appendChild(botonLogOut)


   let sectionPostArea = document.createElement("div");
   sectionPostArea.setAttribute("class", "sectionPostArea");
   containerwall.appendChild(sectionPostArea)

   //AREA PARA PUBLICAR

   let postInput = document.createElement("textarea") //area para escribir el post
   postInput.setAttribute("class", "postinput")
   postInput.setAttribute("placeholder", "¿Qué hay en tu mente hoy?")
   sectionPostArea.appendChild(postInput)

   let botonPosteo = document.createElement("button") //boton para postear
   botonPosteo.setAttribute("class", "botonposteo")
   botonPosteo.setAttribute("id", "botonposteo")
   sectionPostArea.appendChild(botonPosteo)
   botonPosteo.innerHTML = "Postear"

   let botonposteo = sectionPostArea.querySelector('#botonposteo'); //evento del boton
   
    botonposteo.addEventListener('click', () => {
      let inputpost = sectionPostArea.querySelector(".postinput")
      let text = inputpost.value
    console.log(text)
     createPost(db, text)
     location.reload()
     //location.reload();
    }); 

    // FUNCIÓN CERRAR SESION

  const auth = getAuth();

  function logOut() {
   signOut(auth).then(() => {
     alert("Estas cerrando sesión, nos vemos pronto :)");
     window.location.hash = '#/bienvenida';
   }).catch((error) => {
     // An error happened.
   });
  }

  let botonSalir = containerwall.querySelector('#botonLogOut'); //boton logout
   
    botonSalir.addEventListener('click', () => {
     logOut();
    }); 
   

//FUNCION PARA CREAR POSTS CON UID

const createPost = async (db, text) => {

  let userName;

  if (auth.currentUser.displayName == null) { // crea nombre usuaria
    let separateEmail = auth.currentUser.email.split('@');
    userName = separateEmail[0];
    console.log(userName)
  } else {
    userName = auth.currentUser.displayName;
    console.log(userName)
  }

const docRef = await addDoc(collection(db, "post"), {
  userid: auth.currentUser.uid,
  name: userName,
  text,
  datepost: Timestamp.fromDate(new Date()),
  likes: [],
  likesCounter: 0,

}); 
console.log(docRef)
}


//FUNCION PARA MOSTRAR POSTS CON NOMBRE DE USUARIA

const showPost = async () => {

  const postAll = query(collection(db, "post"), orderBy("datepost", "desc"));
  const querySnapshot = await getDocs(postAll);

   
  // CONTAINER PARA LOS POSTS
  
  let postContainer = document.createElement("div");
  postContainer.setAttribute("id", "postContainer");
  postContainer.setAttribute("class", "postContainer");

  postContainer.innerHTML = ''
  querySnapshot.forEach((documento) => {

    //aquí creamos los componentes que contendrán cada nueva publicación y que serán recorridos por el ciclo

    // div para los posts individuales
    const divPost = document.createElement("div");
    divPost.setAttribute("class", "divPost");

    //div uid 
    const divNombre = document.createElement("div");
    divNombre.setAttribute("class", "divNombre");

    //nombre de la usuaria
    const pUser = document.createElement("p");
    pUser.setAttribute("class", "pUser");

    //texto 
    const pPost = document.createElement("p");
    pPost.setAttribute("class", "pPost");

    pUser.innerHTML = documento.data().name;
    pPost.innerHTML = documento.data().text;
   
    let userEditDelete = document.createElement("div");
    userEditDelete.setAttribute("class", "edit-delete"); 
 
    let botonDelete = document.createElement("button")
   botonDelete.setAttribute('type', 'button')
   botonDelete.setAttribute('class', 'botonDelete')
   botonDelete.setAttribute('id', 'botonDelete')
   botonDelete.innerHTML = 'borrar'

  containerwall.appendChild(postContainer);
  postContainer.appendChild(divPost);
  divPost.appendChild(divNombre);
  divNombre.appendChild(pUser);
  divPost.appendChild(pPost); 
  divPost.appendChild(userEditDelete)
   userEditDelete.appendChild(botonDelete)

  
  
 


  // FUNCION PARA BORRAR
    const deletePost = async (id) => {
    await deleteDoc(doc(db, 'post', documento.id));
    console.log('hola');
    }

  if (documento.data().userid === auth.currentUser.uid) {
   

   /* let imgDelete = document.createElement("img")
   imgDelete.setAttribute("src", "https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png")
   imgDelete.setAttribute("class", "imgDelete")
   botonDelete.appendChild(imgDelete)  */

   

    let botonBorrar = divPost.querySelector('#botonDelete'); 
         botonBorrar.addEventListener('click', () => {
         const confirmDelete = confirm('¿Estás segura de eliminar esta publicación?');
          if (confirmDelete == true) {
            deletePost('post');
            
          }

  })  
} 
    
})

}
let valuePost = postInput.value;
showPost(db, valuePost); 

return containerwall
}