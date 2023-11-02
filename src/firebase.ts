import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBhZNM7RlL8HCNwUaazKDe2qT6OaaVnh4",
  authDomain: "bookverse-7daf8.firebaseapp.com",
  projectId: "bookverse-7daf8",
  storageBucket: "bookverse-7daf8.appspot.com",
  messagingSenderId: "167926713791",
  appId: "1:167926713791:web:f05f1a5872ece8bbb9250a",
  measurementId: "G-T96DZV76EW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const user = async () => {
try {
  const docRef = await addDoc(collection(db, "users"), {
    name: "Ada",
    email: "Lovelace",
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}}



export default firebaseConfig

 
