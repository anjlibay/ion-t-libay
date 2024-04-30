// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyBYbvCisgg9dhOt3RS8UoaQSPY62kNABEg",

    authDomain: "it35-libay.firebaseapp.com",

    projectId: "it35-libay",

    storageBucket: "it35-libay.appspot.com",
    
    messagingSenderId: "124068013256",

    appId: "1:124068013256:web:2c875f5b166dbd40d031fd",

    measurementId: "G-ZGWXMGJZ99"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}