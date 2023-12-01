import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDoc, getDocs, setDoc, doc } from "firebase/firestore";


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
    console.error('Error al crear usuario:', error.code, error.message);
    
  });
}

const uploadBook = async (book:any) => {
  try {
    const docRef = await addDoc(collection(db,"books"),book);
    console.log("Document wrtten by ID:", docRef.id)
    
  } catch (error) {
    console.error("error")
  }
}

export const getBooks = async (clase: any) => {
  console.log(clase)
  try {
    let booksByGenre: Record<string, Array<any>> = {};
    const docRef = await getDocs(collection(db, "book"));
    docRef.docs.forEach((d) => {
      const bookData = d.data();
      booksByGenre[bookData.genre] = [
        ...(booksByGenre[bookData.genre] || []),
        bookData,
      ];
    });
    console.log(booksByGenre)
    clase.render(booksByGenre)
    

  } catch (e) {
    console.error("Error retrieving books: ", e);
    throw e;
  }
};

export default{
  saveUser,
  uploadBook,
  getBooks
}

 
