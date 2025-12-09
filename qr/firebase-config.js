import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, runTransaction } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyBfxrRwTuYVvaUH99ByoRSezEd32Txoezk",
  authDomain: "wtfq-online.firebaseapp.com",
  databaseURL: "https://wtfq-online-default-rtdb.firebaseio.com", 
  projectId: "wtfq-online",
  storageBucket: "wtfq-online.appspot.com",
  messagingSenderId: "663547390656",
  appId: "1:663547390656:web:bbd0c11dc096c2d2339b25",
  measurementId: "G-F74R7B29BR"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


export { db, ref, runTransaction };
