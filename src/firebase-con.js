// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG2-avX-TI-LNmksoPKGyJMfg-xa6ytiE",
    authDomain: "logi-1ee21.firebaseapp.com",
    projectId: "logi-1ee21",
    storageBucket: "logi-1ee21.appspot.com",
    messagingSenderId: "170939186776",
    appId: "1:170939186776:web:6416c4445b8b5ec175942d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);