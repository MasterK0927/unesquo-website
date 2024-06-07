// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyByp5rVfG0QjoL_T6Nfl70aIo9SBt-UqRY",
  
    authDomain: "unesquowebsite.firebaseapp.com",
  
    projectId: "unesquowebsite",
  
    storageBucket: "unesquowebsite.appspot.com",
  
    messagingSenderId: "274230631521",
  
    appId: "1:274230631521:web:9cffc7a6cb75e7b6155e20"
  
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth,db };
