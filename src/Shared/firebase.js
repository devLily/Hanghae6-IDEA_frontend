import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
import "firebase/storage";
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} from "../config";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
// const auth = firebase.auth();
// const firestore = firebase.firestore();
const storage = firebase.storage();

// export { auth, apiKey, firestore, storage };
export { apiKey, storage };
