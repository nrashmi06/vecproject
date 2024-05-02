
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase, signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase } from 'firebase/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';



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
const database = getDatabase(); // Initialize Realtime Database

const createUserWithEmailAndPassword = async (email, password, name, place) => {
  try {
    // Create user in Authentication
    const userCredential = await createUserWithEmailAndPasswordFirebase(auth, email, password);
    const user = userCredential.user;
    
    // Store additional user information in Realtime Database
    await set(ref(database, 'users/' + user.uid), {
      email: email,
      name: name,
      place: place
    });

    return user;
  } catch (error) {
    throw error;
  }
};

// Define signInWithEmailAndPassword function
const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPasswordFirebase(auth, email, password);
    console.log('User signed in successfully');
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Define forgotPassword function
const forgotPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    // Email sent successfully
  } catch (error) {
    throw error;
  }
};

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, forgotPassword };