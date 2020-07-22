import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from './firebase/firebaseConfig';
import {FirebaseAppProvider} from  'reactfire';


ReactDOM.render(
      <FirebaseAppProvider firebaseConfig={firebase}>
            <App />
      </FirebaseAppProvider>      
      ,
      document.getElementById('root')
);
serviceWorker.register();
