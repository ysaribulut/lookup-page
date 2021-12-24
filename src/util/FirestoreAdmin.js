import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const app = initializeApp({
    apiKey: "AIzaSyA3OVmp8ofStdUlSCr-G9_DHiGvf4raOXU",
    authDomain: "lookuppageupwork.firebaseapp.com",
    projectId: "lookuppageupwork",
    storageBucket: "lookuppageupwork.appspot.com",
    messagingSenderId: "881044804719",
    appId: "1:881044804719:web:669fe150bd985177e6299a"
});
const db = getFirestore(app);

export {
    app,
    db
}

