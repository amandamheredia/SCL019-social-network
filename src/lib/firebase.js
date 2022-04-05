import { initializeApp} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js"
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"


const firebaseConfig = {
  apiKey: "AIzaSyCLIzYilU7ayc3UC25Np9Dl5C7aSYFqmWw",
  authDomain: "saficas-rs.firebaseapp.com",
  projectId: "saficas-rs",
  storageBucket: "saficas-rs.appspot.com",
  messagingSenderId: "82522011082",
  appId: "1:82522011082:web:2fc656e5c9dc74d5d70b33",
  measurementId: "G-BQTQ93QXWM"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();


//Función para el login 

export const logingoogle = () =>{
    const provider = new GoogleAuthProvider()
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

export const passlogin = () => {

  let emaillogin = document.getElementById("emaillogin").value
  let passwordlogin = document.getElementById("passwordlogin").value

signInWithEmailAndPassword(auth, emaillogin, passwordlogin)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}


//Función para el registro


export const passregister = () => {
 
  let email = document.getElementById('email').value 
  let password = document.getElementById('password').value

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    
    const user = userCredential.user;
    console.log(user)
  })

  updateProfile(auth.currentUser, {
    displayName: userName.value
    
  })

  
  .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;

     console.log(errorCode);
    console.log(errorMessage);

    // let emailMessage = document.querySelector(".errorcorreo");
    // let passwordMessage = document.querySelector(".errorcontrasena");

    // if (errorCode == 'auth/email-already-in-use') {
    //   emailMessage.innerHTML = "<p>Este correo ya se encuentra en uso</p>";
    //   console.log("error correo existente");
    // }
    // else if (errorCode == 'auth/invalid-email') {
    //   emailMessage.innerHTML = "<p>Ingresa un correo electrónico válido</p>";
    // }

    // else if (errorCode == 'auth/weak-password') {
    //   passwordMessage.innerHTML = "<p>La contraseña debe tener al menos 6 caracteres</p>";
    // }

  });

}
 
