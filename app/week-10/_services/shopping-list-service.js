import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getUserItems = async (userId) => {
    try {
        const itemsRef = collection(db, "users", userId, "items");

        const querySnapshot = await getDocs(itemsRef);

        const items = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))

        return items;
    } catch (error) {
        console.error("Error getting items: ", error);
        return [];
    }
}

const addUserItem = async(userId, item) => {
    try {
        const itemsRef = collection(db, "users", userId, "items");

        const docRef = await addDoc(itemsRef, item);

        return docRef.id;
    } catch (error) {
        console.error("Error adding items: ", error);
        throw error;
    }
}

export {getUserItems, addUserItem};