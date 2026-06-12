// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQvv-10L_6qgucX5AKe9I7B7QCGyyxS5Q",
  authDomain: "deutsch-lernen-637ea.firebaseapp.com",
  projectId: "deutsch-lernen-637ea",
  storageBucket: "deutsch-lernen-637ea.firebasestorage.app",
  messagingSenderId: "249872543211",
  appId: "1:249872543211:web:f144bd3deaae4874873dae",
  measurementId: "G-470SB245XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);