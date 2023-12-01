import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { inputs, inputsName, button } from '../components/export';  


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

// export const saveUser = async (name: string, email: string, password: string) => {
//   try {
//     // Crear usuario en Firebase Authentication
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
//     // Obtener el usuario creado
//     const user = userCredential.user;
//     await setDoc(doc(db, "users", user.uid), {
//       name: name,
//       email: email,
//     });
//     console.log('Usuario creado exitosamente:', user);

//   } catch (error) {
//     console.error('Error al crear el usuario:', error);
//   }
// };


//  export const saveUser = async (name: string, email: string, password: string) => {
//   await setDoc(doc(db, "users", name), {
//     name: name,
//      email: email,
//      password: password
//   });
// }

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

export default{
  saveUser
}


// const addUsers = async (user: any) => {
//   try {
//     const userData = collection(db, "users");
//     await addDoc(userData, user);
//     console.log("Usuario regustado exitosamente");
//   } catch (error) {
//     console.error(error);
//   }
// };

//  const getUser = async () => {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   const userSave: any = [];

//   querySnapshot.forEach((doc) => {
//     const user = doc.data();
//     userSave.push({
//       id: doc.id,
//       ...user,
//     });
//   });
//   return userSave;
// };

// export default {
//   addUsers,
//   getUser,
// };
 
