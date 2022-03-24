import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpn0pIjdeSPTv7BkqnyrdoYL9QQ9myeyw",
  authDomain: "ventas-de412.firebaseapp.com",
  projectId: "ventas-de412",
  storageBucket: "ventas-de412.appspot.com",
  messagingSenderId: "957550646788",
  appId: "1:957550646788:web:868c56c4d57a2101c60751",
  measurementId: "G-PYD8CWH0JR"
};

const app = initializeApp(firebaseConfig);
/* export const db = app.firestore(); */
export const auth = getAuth(app);
/* export {app}; */