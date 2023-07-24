// firebase configs
import firebase from'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig={
    apiKey: "AIzaSyAjgihKJcQzxtojFUY1xJLR2ML9Lnkc5CE",
    authDomain: "mitxrib8n3e.firebaseapp.com",
    projectId: "mitxrib8n3e",
    storageBucket: "mitxrib8n3e.appspot.com",
    messagingSenderId: "415672687417",
    appId: "1:415672687417:web:d41a3b41a7c1ef0fbfa6e8",
    measurementId: "G-FYWLR9TM3N"
}
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export {firebase};