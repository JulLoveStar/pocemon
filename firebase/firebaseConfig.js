import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCteowkYTChhfS8LcY_HJO5xjSYuDGLzHw",
  authDomain: "testauthapp-d047c.firebaseapp.com",
  projectId: "testauthapp-d047c",
  storageBucket: "testauthapp-d047c.appspot.com",
  messagingSenderId: "23762601866",
  appId: "1:23762601866:web:e7bbdbac9f1d8bcc68aa73"
};

export const firebaseApp = initializeApp(firebaseConfig);