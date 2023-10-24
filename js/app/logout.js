import { signOut } from "firebase/auth";
import { auth } from './firebase.js';
import { showMessage } from "./showmessage.js";

console.log('A ver')
const logout = document.querySelector('#logOut');

if (logout){

    logout.addEventListener('click', async() => {
        await signOut(auth);
        showMessage('Has cerrado sesión');
        window.location.href = "/index.html";
    });

}