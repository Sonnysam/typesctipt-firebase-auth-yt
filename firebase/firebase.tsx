import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDznbLMFmFxLvPS0XB1ytoj7q0H54aMsMA",
  authDomain: "ag-pay.firebaseapp.com",
  projectId: "ag-pay",
  storageBucket: "ag-pay.appspot.com",
  messagingSenderId: "380201047463",
  appId: "1:380201047463:web:3ed4571ea016d86afc1282",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

export { auth, db };

// // firebase": "^10.1.0",
