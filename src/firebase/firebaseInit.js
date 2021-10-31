import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB48CLKuWaOerWhzbaKtXzepoZptUjn_XA",
  authDomain: "otro-8fb61.firebaseapp.com",
  projectId: "otro-8fb61",
  storageBucket: "otro-8fb61.appspot.com",
  messagingSenderId: "469478401723",
  appId: "1:469478401723:web:a63cb0a43f313c42e0ab9e"
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
const lineStamp = firebase.firestore.FieldValue.serverTimestamp;

export{timeStamp}
export default fireBaseApp.firestore();