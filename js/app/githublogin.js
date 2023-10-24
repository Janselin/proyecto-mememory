import { GithubAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './firebase.js';
import { showMessage } from './showmessage.js';


const gitHubButton = document.querySelector('#logGitHub');

if (gitHubButton){

    gitHubButton.addEventListener('click', async () => {

        const provider = new GithubAuthProvider();

        try {
            const credentials = await signInWithPopup(auth, provider);
            console.log(credentials);
            showMessage('Bienvenido usuario de Github ' + credentials.user.displayName, 'success');
        } catch (error) {
            console.log(error);
        }

    })

}