import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCFv02FDUrd4D6hnzSNebV6Jq46J5I3Lb4",
  authDomain: "react-firebase-ccfc7.firebaseapp.com",
  databaseURL: "https://react-firebase-ccfc7.firebaseio.com",
  projectId: "react-firebase-ccfc7",
  storageBucket: "react-firebase-ccfc7.appspot.com",
  messagingSenderId: "179616419637"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
