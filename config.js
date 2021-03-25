import firebase from "firebase"
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAh6rRrImpSaQj2IEUQ5r14M1H_L_DU-ck",
    authDomain: "buzzer-app-883ee.firebaseapp.com",
    databaseURL: "https://buzzer-app-883ee-default-rtdb.firebaseio.com",
   projectId: "buzzer-app-883ee",
    storageBucket: "buzzer-app-883ee.appspot.com",
    messagingSenderId: "956698333525",
    appId: "1:956698333525:web:ad6793b1b6e8d37ced9fdc"
  };


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()