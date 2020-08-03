import firebase from 'firebase';
import 'firebase/firestore';

const config={
    apiKey: "AIzaSyAGhhahBkE9YXrL1I9ut16DbbAV7azr1uw",
    authDomain: "projects-awa.firebaseapp.com",
    databaseURL: "https://projects-awa.firebaseio.com",
    projectId: "projects-awa",
    storageBucket: "projects-awa.appspot.com",
    messagingSenderId: "778623480633",
    appId: "1:778623480633:web:2b4f070a8c8ccc3156aee8"
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

export const db = firebase.firestore();

export const auth = firebase.auth();



export default firebase;