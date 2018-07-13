import Rebase from 're-base';
import firebase from '@firebase/app';
import 'firebase/database';
import config from  './firebase.json';

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export  { base };