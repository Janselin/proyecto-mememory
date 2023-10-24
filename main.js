import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

import { auth, db } from './js/app/firebase.js';
/* import { loginCheck  } from "./js/app/logincheck.js"; */

/* import { setupScores } from "./js/app/score.js"; */

/* import './js/app/signupform.js'; */
/* import './js/app/logout.js'; */
/* import './js/app/logincheck.js'; */
/* import './js/app/signinform.js';
import './js/app/googlelogin.js';
import './js/app/githublogin.js'; */
/*import './app/score.js'; */


onAuthStateChanged(auth, async (user) => {
    console.log('Usuario Firebase', user);

    if (user){
        const querySnapShot = await getDocs(collection(db, 'puntajes'));
        /* setupScores(querySnapShot.docs); */
    }else{
        /* setupScores([]); */
    }
    /* loginCheck(user); */

})


// service worker
navigator.serviceWorker.register('sw.js');
