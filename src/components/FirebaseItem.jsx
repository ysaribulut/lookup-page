import { useEffect, useState } from "react";
import { getUserById } from "../util/Firestore";

export default function FirebaseItem({id}) {

    const [user, setUser] = useState();

    useEffect(() => {
        getUserById(id).then(setUser);
    }, [id]);

    if(!user) {
        return null;
    }

    return (
        <div>
            {id}: {JSON.stringify(user)}
            <br/><br/>
        </div>
    );
}