import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from "./showmessage.js";

console.log('A ver')
const logout = document.querySelector('#logOut');

if (logout){

    logout.addEventListener('click', async() => {
        await signOut(auth);
        showMessage('Has cerrado sesión');
        window.location.href = "/proyecto-mememory";
    });

}