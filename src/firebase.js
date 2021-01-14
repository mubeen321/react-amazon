import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyClvwlM8IOdfJbieih9e4Id2TrEVYqnWWQ",
    authDomain: "fir-634ba.firebaseapp.com",
    projectId: "fir-634ba",
    storageBucket: "fir-634ba.appspot.com",
    messagingSenderId: "135576335179",
    appId: "1:135576335179:web:0fa006ed2c42a1e07e2ece"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();

  export {db,auth} ;