import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBdikmNKiiafepQfN14A0AoFoscJwcLRWw",
    authDomain: "hanghae99-week4-mini-project.firebaseapp.com",
    projectId: "hanghae99-week4-mini-project",
    storageBucket: "hanghae99-week4-mini-project.appspot.com",
    messagingSenderId: "556292407749",
    appId: "1:556292407749:web:25d9f1f054bfdcc9188bac",
    measurementId: "G-W7EPZ1BW4J"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
// const auth = firebase.auth();
// const firestore = firebase.firestore();
const storage = firebase.storage();

// export { auth, apiKey, firestore, storage };
export { apiKey, storage };



