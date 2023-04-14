  
  import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

  
  const firebaseConfig = {
    apiKey: "AIzaSyCsa-9Su2FChNIKLLqk-ggbv-TmOZAa3fY",
    authDomain: "emailsignup-fc167.firebaseapp.com",
    projectId: "emailsignup-fc167",
    storageBucket: "emailsignup-fc167.appspot.com",
    messagingSenderId: "219351075747",
    appId: "1:219351075747:web:9ee3c66273704af2512816",
    measurementId: "G-B8KFT8DXME"
  };
  
  
  const app = initializeApp(firebaseConfig); 
  const db = getFirestore(app); 
  export default { db, app};
   
  
 
  
   
  
  
  
  