import { addDoc, collection } from "firebase/firestore";
import { db } from "./init";


export const  adminRegister = async (data: any) => {
    try {
        await addDoc(collection(db, "admin"), data);
        return true;
    } catch (error){
        console.log("error dari firebase: ", error)
        return false;
    }
}