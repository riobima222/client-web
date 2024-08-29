import { storage } from "@/lib/firebase/init";
import { getDownloadURL, ref } from "firebase/storage";

export const getImage = async (imageName: string) => {
  const imageRef = ref(storage, `assets/logo/${imageName}`);
  try {
    const url = await getDownloadURL(imageRef);
    console.log("ini adalah url: ", url);
    return { status: true, url };
  } catch (error) {
    return { status: false, error };
  }
};
