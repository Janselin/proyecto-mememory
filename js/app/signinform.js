import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './firebase.js';
import '../avatars.js';

const signInForm = document.querySelector('#sign_in_form');

if (signInForm){

    signInForm.addEventListener('submit', async e => {
        e.preventDefault();        

        const email = signInForm['usuario'].value;
        const password = signInForm['contraseña'].value;

        try {
            const credentials = await signInWithEmailAndPassword(auth, email, password);
            console.log('Credenciales:', credentials);

            avatar_logo.style="display: block";


            
            window.location.href = "/proyecto-mememory/juego.html";
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                alert('El error es:', error.message)
                                
                
            }else if(error){
                alert(error)  
                avatar_happy.style="display: none";
                avatar_error.style="display: block"
                avatar_user.style="display: none";
                avatar_logo.style="display: none";

            }
        }
    })

};