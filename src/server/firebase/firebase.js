import Rebase from 're-base';
import firebase from '@firebase/app';
import 'firebase/database';
import 'firebase/auth';
import config from  './firebase.json';

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());
const firebaseAuth = firebase.auth();

const signIn = (email, password) => { return firebaseAuth.signInWithEmailAndPassword(email, password) }; 
const signOut = () => { return firebaseAuth.signOut() };

export  { base, signIn, signOut, firebaseAuth };
