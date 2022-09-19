// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXbcP50FzUfjjzj_Y1YGH-LBWdJnwlSNk",
  authDomain: "chatrealtime-90de7.firebaseapp.com",
  projectId: "chatrealtime-90de7",
  storageBucket: "chatrealtime-90de7.appspot.com",
  messagingSenderId: "75840047966",
  appId: "1:75840047966:web:7583e7c9a5c3bad2e69dcf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();