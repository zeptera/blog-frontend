import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCJX7bk2U-4D_lhxPtd8pFfF57EjhC7fGc",
  authDomain: "zeptera-1.firebaseapp.com",
  projectId: "zeptera-1",
  storageBucket: "zeptera-1.firebasestorage.app",
  messagingSenderId: "624924669579",
  appId: "1:624924669579:web:785e872e9066de1bd2468e",
  measurementId: "G-2HXVK58YEF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();
