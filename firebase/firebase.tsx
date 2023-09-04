import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqev57rXTnF6pt6RHGFYvmS5ud1neft6I",
    authDomain: "auth-yt-ts-11d57.firebaseapp.com",
    projectId: "auth-yt-ts-11d57",
    storageBucket: "auth-yt-ts-11d57.appspot.com",
    messagingSenderId: "375599669329",
    appId: "1:375599669329:web:3522256437c51445eb9870"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
