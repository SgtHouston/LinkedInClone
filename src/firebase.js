import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { onSnapshot, collection, query, getDocs, orderBy } from "firebase/firestore";
import { store } from './redux/store'
import { actionSetPosts } from './redux/actions/posts';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyAYyc7jS1VgEhS7nuKnVkie1EP5jrcnPkI",
    authDomain: "linkedin-clone-f9ce5.firebaseapp.com",
    databaseURL: "https://linkedin-clone-f9ce5-default-rtdb.firebaseio.com",
    projectId: "linkedin-clone-f9ce5",
    storageBucket: "linkedin-clone-f9ce5.appspot.com",
    messagingSenderId: "947749554950",
    appId: "1:947749554950:web:e7c29a888aee00b7ecec87",
    measurementId: "G-GHWGY82X9X"
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);


// detect auth state
// takes an argument of either the service returned from the getter 
// function or some relevant container object

onAuthStateChanged(auth, user => {
    // Check for user status
    if (user !== null) {
        console.log('Logged in with Firebase!')
        console.log(user)
        
    } else {
        console.log('No user')
    }
});



const q = query(collection(db, "posts"), orderBy("time", "desc"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
        posts.push(doc.data());
    });
    store.dispatch(actionSetPosts(posts));
});

(async () => {
    const querySnapshot = await getDocs(collection(db, "posts"), orderBy("time", "desc"));
    const posts = [];
    querySnapshot.forEach((doc) => {
        posts.push(doc.data());
    });
    store.dispatch(actionSetPosts(posts));
    
})()

export default firebase