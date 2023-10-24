import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './firebase.js';
import { showMessage } from './showmessage.js';


const googleButton = document.querySelector('#logGoogle');

if (googleButton){

    googleButton.addEventListener('click', async () => {

        const provider = new GoogleAuthProvider();

        try {
            const credentials = await signInWithPopup(auth, provider);
            console.log(credentials);
            showMessage('Bienvenido usuario de Google ' + credentials.user.displayName, 'success');
        } catch (error) {
            console.log(error);
        }

    })

};