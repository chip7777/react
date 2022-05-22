import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyACPh3yK_c7K_mijHfgVZDFFZ3kaWSU23c',
  authDomain: 'chip7777-react.firebaseapp.com',
  projectId: 'chip7777-react',
  storageBucket: 'chip7777-react.appspot.com',
  messagingSenderId: '812273063624',
  appId: '1:812273063624:web:f06d8e762b4231a4cdf7fd',
};

const firebase = initializeApp(firebaseConfig);

// https://chip7777-react-default-rtdb.europe-west1.firebasedatabase.app/:null

export const auth = getAuth(firebase);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);
