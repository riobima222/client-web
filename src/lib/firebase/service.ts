import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./init";
import bcrypt from "bcrypt";
import { DataLogin, DataRegister } from "./interface";

// AUTHENTICATION
export const adminRegister = async (data: DataRegister) => {
  try {
    const q = query(collection(db, "admin"), where("email", "==", data.email));
    const q2 = query(
      collection(db, "admin"),
      where("username", "==", data.username)
    );
    const snapshot1 = await getDocs(q);
    const snapshot2 = await getDocs(q2);
    const admins = snapshot1.docs.map((doc) => doc.data());
    const admins2 = snapshot2.docs.map((doc) => doc.data());

    if (admins.length > 0) {
      return "email";
    } else if (admins2.length > 0) {
      return "username";
    } else {
      data.createdAt = new Date();
      data.password = await bcrypt.hash(data.password, 10);
      await addDoc(collection(db, "admin"), data);
      return true;
    }
  } catch (error) {
    return false;
  }
};

export const adminLogin = async (data: DataLogin) => {
  const q = query(collection(db, "admin"), where("email", "==", data.email));
  const snapshot = await getDocs(q);
  const datas = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const admin = datas[0];
  if (admin) {
    return admin;
  } else {
    return false;
  }
};

// LAYANAN
export const getAllLayanan = async () => {
  try {
    const snapshot = await getDocs(collection(db, "layanan-asisten-jurnal"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (err) {
    return false;
  }
};
