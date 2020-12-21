import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDcOc-afiyBUw4Qj-8oQ7Qf9VlvSvgPOyI",
    authDomain: "fitpartner-fe85d.firebaseapp.com",
    projectId: "fitpartner-fe85d",
    storageBucket: "fitpartner-fe85d.appspot.com",
    messagingSenderId: "207459356409",
    appId: "1:207459356409:web:96e565bbf7441b1b80dc28",
    measurementId: "G-KE94P1VP79"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const database = firebaseApp.firestore();
  
  export default database;