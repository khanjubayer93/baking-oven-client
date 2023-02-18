// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTzEtAVgOPwEcYuUXZQLTEh7-ZZqdavBA",
    authDomain: "baking-oven.firebaseapp.com",
    projectId: "baking-oven",
    storageBucket: "baking-oven.appspot.com",
    messagingSenderId: "441630338394",
    appId: "1:441630338394:web:223bd4d03273321c7dd763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;