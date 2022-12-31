import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFIkHNcdl9Hni3-nNwqagNtovNnenxdjw",
  authDomain: "my-music-app-16b88.firebaseapp.com",
  projectId: "my-music-app-16b88",
  storageBucket: "my-music-app-16b88.appspot.com",
  messagingSenderId: "213721878394",
  appId: "1:213721878394:web:0804b59e1cc8c15c2090c3",
  measurementId: "G-PPEWBQVDLP",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const auth = getAuth();

const signUp = document.getElementById("signUpButton");

signUp.addEventListener("click", (e) => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "/signin.html";
    })
    .catch((error) => {
      const errorCode = error.errorCode;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});
