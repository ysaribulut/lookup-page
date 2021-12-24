import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore/lite';

const app = initializeApp({
    apiKey: "AIzaSyDAj8lcCCkmxrIKcDJ3_jD1fhzoJXhnnp8",
    authDomain: "lookup-page.firebaseapp.com",
    projectId: "lookup-page",
    storageBucket: "lookup-page.appspot.com",
    messagingSenderId: "901101214656",
    appId: "1:901101214656:web:5da151bcac4c0760124625"
  });
const db = getFirestore(app);
connectFirestoreEmulator(db, 'localhost', 8087);

export {
    app,
    db
}

