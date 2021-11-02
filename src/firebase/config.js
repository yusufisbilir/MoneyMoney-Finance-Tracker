import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-LCy4GxI6Ihi9m4yqzqCjAefnxYXxAkc",
  authDomain: "moneymoney-react-app.firebaseapp.com",
  projectId: "moneymoney-react-app",
  storageBucket: "moneymoney-react-app.appspot.com",
  messagingSenderId: "183300837498",
  appId: "1:183300837498:web:7a16e925baae0412acebc3",
};

firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore();

export { projectFireStore };
