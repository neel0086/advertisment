import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAM5S7phjWVG7QH9wkP2atmI1gTYaV2lw0",
  authDomain: "trendify-79dd2.firebaseapp.com",
  projectId: "trendify-79dd2",
  storageBucket: "trendify-79dd2.appspot.com",
  messagingSenderId: "963488011346",
  appId: "1:963488011346:web:0dc28edbf7378476d9bb8b",
  measurementId: "G-SPL34H725E"

});

const firestore=app.firestore();
const db={
    blogs:firestore.collection('blogs'),
    // files:firestore.collection('files'),
    // bin:firestore.collection('Trash'),
    // fav:firestore.collection('Favourite'),
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
    formatDoc:doc => {
        return {id:doc.id, ...doc.data()}
    }
}
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider
export const storage = app.storage()  
export {db,auth,provider};
export default app
