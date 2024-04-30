
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase,signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase } from 'firebase/auth'; // Rename the imported function
import { sendPasswordResetEmail } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6aMjqeovzYU5HKE2_Vrax54OnR8cs6sw",
  authDomain: "vec-66f73.firebaseapp.com",
  projectId: "vec-66f73",
  storageBucket: "vec-66f73.appspot.com",
  messagingSenderId: "259098061115",
  appId: "1:259098061115:web:52ac3ac1a3ebd52554af1e",
  measurementId: "G-SNVSTYVTN3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Define your createUserWithEmailAndPassword function using the imported function
const createUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPasswordFirebase(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPasswordFirebase(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
const forgotPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    // Email sent successfully
  } catch (error) {
    throw error;
  }
};

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, forgotPassword}; 
