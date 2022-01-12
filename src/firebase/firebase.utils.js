import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";




// Import the functions you need from the SDKs you need

 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGlhsDvhYqR-3961VycTdSbSlqSNI5xLw",
  authDomain: "thetales-41231.firebaseapp.com",
  projectId: "thetales-41231",
  storageBucket: "thetales-41231.appspot.com",
  messagingSenderId: "890024025957",
  appId: "1:890024025957:web:38f9a4ba7334215571cb8c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth(); 
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>{
    auth.signInWithPopup(provider);
}
const providergit = new firebase.auth.GithubAuthProvider();
providergit.setCustomParameters({prompt:'select_account'});
export const signInWithGit=()=>{
    auth.signInWithPopup(providergit);
}
// const providerfb = new firebase.auth.FacebookAuthProvider();
// providerfb.setCustomParameters({prompt:'select_account'});
// export const signInWithFb = ()=>{
//     auth.signInWithPopup(providerfb);
// }