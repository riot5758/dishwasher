// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCeH1E7P6qnevMT76l6fIw1npGbyht2uo",
  authDomain: "dishwasher-57bdf.firebaseapp.com",
  projectId: "dishwasher-57bdf",
  storageBucket: "dishwasher-57bdf.firebasestorage.app",
  messagingSenderId: "31740316293",
  appId: "1:31740316293:web:091f5fe3b9d9d27f8b77ec",
  measurementId: "G-5VC0XZTL92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
