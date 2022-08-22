// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg75CRjts19uyguGW0y_qgHGe0RrAb9c8",
  authDomain: "vue-fire-auth-615f8.firebaseapp.com",
  projectId: "vue-fire-auth-615f8",
  storageBucket: "vue-fire-auth-615f8.appspot.com",
  messagingSenderId: "894154338324",
  appId: "1:894154338324:web:c24521e51b375311bc3701"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }