import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYiWtJomvFTikPG7nm3kU01Kkdd9qG_DE",
  authDomain: "ecommerce-garcia.firebaseapp.com",
  projectId: "ecommerce-garcia",
  storageBucket: "ecommerce-garcia.appspot.com",
  messagingSenderId: "872144742996",
  appId: "1:872144742996:web:ff7b34f3bcabc21a221bc1"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp () {
    return app
}