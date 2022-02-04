import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBYJEmWghHKExdljR8i4i5jCnumCTpDYSI",
  authDomain: "fir-tinder-cl-eef6a.firebaseapp.com",
  projectId: "fir-tinder-cl-eef6a",
  storageBucket: "fir-tinder-cl-eef6a.appspot.com",
  messagingSenderId: "841954737681",
  appId: "1:841954737681:web:ce21696288159396e37bb0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db