import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = 
    {
        apiKey: "AIzaSyD_TqzUDcJY62iRH0j34GjOPakQodylSp0",
        authDomain: "fashion-hub-1d5ac.firebaseapp.com",
        databaseURL: "https://fashion-hub-1d5ac.firebaseio.com",
        projectId: "fashion-hub-1d5ac",
        storageBucket: "fashion-hub-1d5ac.appspot.com",
        messagingSenderId: "565752423651",
        appId: "1:565752423651:web:71a80d13142662934791d6",
        measurementId: "G-W463M1MMMH"
      };

      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt:'select_account'});
      export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

      export default firebase;