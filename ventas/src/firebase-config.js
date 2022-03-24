import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCuII5NNFu4P-pc2iXpLV_UHGyTF4Rj_tc",
    authDomain: "hiffel.firebaseapp.com",
    databaseURL: "https://hiffel.firebaseio.com",
    projectId: "hiffel",
    storageBucket: "hiffel.appspot.com",
    messagingSenderId: "518837504424",
    appId: "1:518837504424:web:48b88a504a6c5adbb0f59d"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);