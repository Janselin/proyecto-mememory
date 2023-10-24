// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkoGa6dMvk_QqDVtT10A4Kly0Vn0PLM8s",
    authDomain: "loginfirebase-24efb.firebaseapp.com",
    projectId: "loginfirebase-24efb",
    storageBucket: "loginfirebase-24efb.appspot.com",
    messagingSenderId: "192835852302",
    appId: "1:192835852302:web:0fd091e6635a79baff845f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);