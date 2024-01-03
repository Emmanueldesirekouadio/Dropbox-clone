import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCB66kLtxs0vUJdUZU_zrGOQqKJMxgov9c",
  authDomain: "dropbox-clone-final.firebaseapp.com",
  projectId: "dropbox-clone-final",
  storageBucket: "dropbox-clone-final.appspot.com",
  messagingSenderId: "780259670743",
  appId: "1:780259670743:web:3d2a7860084d1268804e92",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
