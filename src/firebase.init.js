// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiS4hLYJi-_PX7wZBl6mHwH7bRH6o43Jo",
    authDomain: "warehouse-197e7.firebaseapp.com",
    projectId: "warehouse-197e7",
    storageBucket: "warehouse-197e7.appspot.com",
    messagingSenderId: "1090284173731",
    appId: "1:1090284173731:web:425b0984899fc149d6c216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth