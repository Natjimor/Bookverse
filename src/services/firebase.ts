import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBhZNM7RlL8HCNwUaazKDe2qT6OaaVnh4",
  authDomain: "bookverse-7daf8.firebaseapp.com",
  projectId: "bookverse-7daf8",
  storageBucket: "bookverse-7daf8.appspot.com",
  messagingSenderId: "167926713791",
  appId: "1:167926713791:web:f05f1a5872ece8bbb9250a",
  measurementId: "G-T96DZV76EW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export const saveUser = async (name: any, email: any, password: any) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setDoc(doc(db, "users", name), {
        name: name,
        email: email,
      });
    })
    .catch((error) => {
      console.error("Error al crear usuario:", error.code, error.message);
    });
};

export const getUsers = async (email: any, password: any) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("se inicio sesion", user);
    return user; // Devuelve el usuario si la autenticación es exitosa
  } catch (error) {
    alert(
      "correo electronico o contraseña invalidos, por favor intentalo de nuevo"
    );
    console.log(`Error al iniciar sesión`, error);
  }
};
const uploadBook = async (book:any) => {
  try {
    const docRef = await addDoc(collection(db,"books"),book);
    console.log("Document wrtten by ID:", docRef.id)
    
  } catch (error) {
    console.error("error")
  }
}

const getBooks = async () => {
  try {
    const docRef = await getDocs (collection(db,"books"));
    docRef.docs.forEach((d) => {
      console.log(d.data())
    })
    
  } catch (error) {
    console.error("error")
  }
}


export default {
  saveUser,
  uploadBook,
  getBooks
};
