import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import  "firebase/firestore";
import  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq238MvSDz5Sfs8OUfiMfxHHkZ9kOhLN4",
  authDomain: "auth-564ed.firebaseapp.com",
  projectId: "auth-564ed",
  storageBucket: "auth-564ed.appspot.com",
  messagingSenderId: "521048165575",
  appId: "1:521048165575:web:b510370957d95c0e0a82e2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
