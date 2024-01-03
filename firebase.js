// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getFunctions } from "firebase/functions";
import { browserLocalPersistence, initializeAuth, setPersistence } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCB9di_HCzOJDBzv4NMX_uxE6U96EJ68Ms",
    authDomain: "footprint-collective.firebaseapp.com",
    databaseURL: "https://footprint-collective-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "footprint-collective",
    storageBucket: "footprint-collective.appspot.com",
    messagingSenderId: "1039428808979",
    appId: "1:1039428808979:web:7314b1e6aa571ab16c2ae6",
    measurementId: "G-QYFV86S5KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app);

const storage = getStorage();

// Initialize Firebase Realtime and get a reference to the service
const database = getDatabase(app);
// initialize auth
const auth = initializeAuth(app);
//await setPersistence(auth, browserLocalPersistence);

const functions = getFunctions(app)

export { auth, firestore, database, functions, storage };