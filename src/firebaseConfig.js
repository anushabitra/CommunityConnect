import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOslqiM-TAQlF2j5xPj1y0u_rhryKuGEI",
  authDomain: "majorprojectfinal-89f00.firebaseapp.com",
  databaseURL: "https://majorprojectfinal-89f00-default-rtdb.firebaseio.com",
  projectId: "majorprojectfinal-89f00",
  storageBucket: "majorprojectfinal-89f00.appspot.com",
  messagingSenderId: "386804402849",
  appId: "1:386804402849:web:ebb47de56312e7e2d5bee0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
