/* eslint-disable no-unused-vars */
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAWXjeumwMD1LEs4KWeglBT6EsjQQiTU3g",
    authDomain: "e-commerce-d312f.firebaseapp.com",
    projectId: "e-commerce-d312f",
    storageBucket: "e-commerce-d312f.appspot.com",
    messagingSenderId: "973434836410",
    appId: "1:973434836410:web:7ab7315d53321312523983"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}
