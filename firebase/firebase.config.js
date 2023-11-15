// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-PS8xu6d2X6MTOSvOhuteiZo22snl4x0",
  authDomain: "coffee-store-9aaa5.firebaseapp.com",
  projectId: "coffee-store-9aaa5",
  storageBucket: "coffee-store-9aaa5.appspot.com",
  messagingSenderId: "795780713814",
  appId: "1:795780713814:web:fb4a53417ccd96e25ddaf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;