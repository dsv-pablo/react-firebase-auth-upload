import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDf0TSCb53-gg-xILtcmcICvgGD4kdEO4o",
  authDomain: "nias-ia-competition.firebaseapp.com",
  projectId: "nias-ia-competition",
  storageBucket: "nias-ia-competition.appspot.com",
  messagingSenderId: "958724120354",
  appId: "1:958724120354:web:68ea12c375fd2cbd40cf7b"
});

export const auth = app.auth();
export const storage = app.getStorage;
export default app;
