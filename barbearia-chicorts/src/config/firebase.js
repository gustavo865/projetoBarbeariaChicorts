import { initializeApp } from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDhdCZisqZD8GdmdUQvUbKDBsrcPHraVgs",
  authDomain: "aplicativo-38e43.firebaseapp.com",
  projectId: "aplicativo-38e43",
  storageBucket: "aplicativo-38e43.appspot.com",
  messagingSenderId: "822590012272",
  appId: "1:822590012272:web:58544544f4aa649f6b6db5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig)

export default app