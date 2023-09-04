import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFXY_eOLq5A2fzePEYa1jhjk6jizzf8SM",
    authDomain: "auth-proj-4305b.firebaseapp.com",
    projectId: "auth-proj-4305b",
    storageBucket: "auth-proj-4305b.appspot.com",
    messagingSenderId: "281890431690",
    appId: "1:281890431690:web:0ba16f3f78ce05ae5c4a33"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
