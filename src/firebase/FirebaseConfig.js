import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAL-MTQGolS39KAjMlenXn3v1IY0nl8Z60",
    authDomain: "student-c1cca.firebaseapp.com",
    projectId: "student-c1cca",
    storageBucket: "student-c1cca.appspot.com",
    messagingSenderId: "795493420922",
    appId: "1:795493420922:web:512dc73cd278b5e71a50c3",
    measurementId: "G-TN2M59EKQE"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage};