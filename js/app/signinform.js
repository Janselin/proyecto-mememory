import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase.js';

const signInForm = document.querySelector('#sign_in_form');

if (signInForm){

    signInForm.addEventListener('submit', async e => {
        e.preventDefault();
        console.log('Click en submit')

        const email = signInForm['usuario'].value;
        const password = signInForm['contraseña'].value;

        try {
            const credentials = await signInWithEmailAndPassword(auth, email, password);
            console.log('Credenciales:', credentials);

            console.log('Si llegué hasta el try')
            window.location.href = "/juego.html";
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                alert('El error es:', error.message)
            }else if(error){
                alert(error)
            }
        }
    })

};