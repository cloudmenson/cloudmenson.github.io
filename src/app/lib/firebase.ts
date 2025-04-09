import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCVV5oxn3_cweZ9NGTiE-H31f_IMgzboL8",
  authDomain: "crew-helper.firebaseapp.com",
  projectId: "crew-helper",
  storageBucket: "crew-helper.appspot.com",
  messagingSenderId: "770217910523",
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
