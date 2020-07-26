import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtWD-uWt8HcX-IYXs0yPqzRMe087qJ0Dk",
  authDomain: "my-react-app-5dd73.firebaseapp.com",
  databaseURL: "https://my-react-app-5dd73.firebaseio.com",
  projectId: "my-react-app-5dd73",
  storageBucket: "my-react-app-5dd73.appspot.com",
  messagingSenderId: "891466866787",
  appId: "1:891466866787:web:203547df55aaa4b35f9856",
  measurementId: "G-0JEFNNP2GH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
