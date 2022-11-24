// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIHYR9xHL1F2Pj5__M77Tcvsn2aCY9BPc",
    authDomain: "laptop-corner.firebaseapp.com",
    projectId: "laptop-corner",
    storageBucket: "laptop-corner.appspot.com",
    messagingSenderId: "557701250681",
    appId: "1:557701250681:web:623b6628b92d1a97ab5ea8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;