import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref as ref_database,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getStorage,
  ref as ref_storage,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";

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
const storage = getStorage(app);

var files = [];
document.getElementById("files").addEventListener("change", (e) => {
  files = e.target.files;
});

document.getElementById("upload").addEventListener("click", function () {
  if (files.length != 0) {
    for (let i = 0; i < files.length; i++) {
      var storageRef = ref_storage(storage, "songs/" + files[i].name);

      uploadBytes(storageRef, files).then((snapshot) => {});
    }
    const artist = document.getElementById("artist").value;
    const songName = document.getElementById("song-name").value;
    var fileName = document.getElementById("files").value;
    var ext = fileName.substr(0, fileName.lastIndexOf("."));

    set(ref_database(database, "songs/" + ext), {
      artist: artist,
      songName: songName,
    });
  } else alert("You need to upload a file!");
});
