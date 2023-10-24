import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from './firebase.js';
import { showMessage } from "./showmessage.js";


const signUpForm = document.querySelector('#sign_up_form');

showMessage('Test', 'success');

if (signUpForm){

    signUpForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = signUpForm['usuario-registro'].value;
        const password = signUpForm['contraseña-registro'].value;

        console.log(email, password);

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredentials);

            showMessage('Bienvenido' + userCredentials.user.email);

            window.location.href = "/proyecto-mememory/";

        } catch (error) {
            // Manejar el error de registro aquí

            if(error.code === 'auth/invalid-email'){
                showMessage('Mail inválido', 'error');
            } else if(error.code === 'auth/email-already-in-use'){
                showMessage('El mail ya está en uso', 'error');
            } else if(error.code === 'auth/weak-password'){
                showMessage('La contraseña debe ser mínimo de 6 caracteres ó tiene algún caracter inválido', 'error');
            } else if(error.code){
                showMessage('Algo ha fallado, recargue la página e intente nuevamente', 'error');
            }
        }
    });

}