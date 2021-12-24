import { db } from "./FirestoreAdmin";
import { doc, getDoc } from 'firebase/firestore/lite';

export async function getUserById(userId) {
    const myDoc = doc(db, `/users/${userId}`);
    var mySnapshot = await getDoc(myDoc);
    if(mySnapshot.exists()) {
        const docData = mySnapshot.data();
        console.log(docData);
        return docData;
    }
}