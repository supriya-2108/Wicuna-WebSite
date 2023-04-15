// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAgxU_zCVGEQk4QTtZ5k30fa_Bj3HNSitk',
  authDomain: 'wicuna-10ac3.firebaseapp.com',
  projectId: 'wicuna-10ac3',
  storageBucket: 'wicuna-10ac3.appspot.com',
  messagingSenderId: '1020587662089',
  appId: '1:1020587662089:web:f9aa808c990ec285ea51d8',
  measurementId: 'G-L2834ZGDFV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
