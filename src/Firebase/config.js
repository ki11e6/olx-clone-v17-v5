import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDLZAwa0qtFNmm2OGcbYjS2r0L2qz5Xcts',
  authDomain: 'react-project-d150d.firebaseapp.com',
  projectId: 'react-project-d150d',
  storageBucket: 'react-project-d150d.appspot.com',
  messagingSenderId: '771695816217',
  appId: '1:771695816217:web:cbc668f1819c782c610488',
  measurementId: 'G-ML2DNJMPR1',
};

export default firebase.initializeApp(firebaseConfig);
