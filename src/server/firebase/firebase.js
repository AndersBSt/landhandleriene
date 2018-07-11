import Rebase from 're-base';
import firebase from 'firebase';

import config from  './firebase.json';

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export  { base };