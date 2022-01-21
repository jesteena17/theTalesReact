import firebase from 'firebase/compat/app';

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
//add shop data to fb by creating a collection

/*
export const addCollectionandDocument=async (collectionKey,objectsToAdd)=>{
const collectionRef=firestore.collection(collectionKey);
console.log(collectionRef);
const batch=firestore.batch();
objectsToAdd.forEach(obj=>{
  const newDocRef=collectionRef.doc();
  batch.set(newDocRef,obj);

})
return await batch.commit().then(function() {
  alert('Done.')
})
.catch(err => alert(`There was an error: ${err}`))
}

*/


export const auth=firebase.auth(); 
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>{
    auth.signInWithPopup(provider);
}
// const providergit = new firebase.auth.GithubAuthProvider();
// providergit.setCustomParameters({prompt:'select_account'});
// export const signInWithGit=()=>{
//     auth.signInWithPopup(providergit);
// }
// const providerfb = new firebase.auth.FacebookAuthProvider();
// providerfb.setCustomParameters({prompt:'select_account'});
// export const signInWithFb = ()=>{
//     auth.signInWithPopup(providerfb);
// }


export const createUserProfileDocument=async(userAuth,additionalData)=>{
  if(!userAuth) return;
  // console.log(firestore.doc('users/1'));
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot=await userRef.get();
if(!snapShot.exists)
{
  const {displayName,email}=userAuth;
  const createdAt=new Date(); 
try {
  await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalData
  })
} catch (error) {
  console.log('error creating user collection',error.message);
}
}

// console.log(snapShot);  
return userRef;
}