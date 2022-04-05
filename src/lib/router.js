import { bienvenida } from "../view/bienvenida.js";
import { logIn } from "../view/login.js";
import { register } from "../view/register.js";
import { wall } from "../view/muro.js"

export function router (){


    const root = document.getElementById('root');
       

       
   

      if (window.location.hash === '#/bienvenida'){
        root.innerHTML = ''
        root.appendChild(bienvenida());
    }  
    window.addEventListener('hashchange', () => {
        
     if (window.location.hash === '#/login'){
        root.innerHTML = ''
        root.appendChild(logIn());
    }

    else if (window.location.hash === '#/register'){
        root.innerHTML = ''
        root.appendChild(register());
    }

    else if (window.location.hash === '#/muro'){
        root.innerHTML = ''
        root.appendChild(wall());
    }
    

})

}