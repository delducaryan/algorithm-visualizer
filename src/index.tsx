import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDr0p1YDsd0-p7dMoeMTZ7JV8VjtL8EJ0g",
  authDomain: "algorithm-visualizer-b8342.firebaseapp.com",
  databaseURL: "https://algorithm-visualizer-b8342.firebaseio.com",
  projectId: "algorithm-visualizer-b8342",
  storageBucket: "algorithm-visualizer-b8342.appspot.com",
  messagingSenderId: "159098335363",
  appId: "1:159098335363:web:49a453e9f87959de1b2bb6",
  measurementId: "G-WBT65NZ4D4"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
