"use client";

import { FormEvent, useContext, useState } from "react";
import { Modal } from "../every/modal";
import DynamicReactQuill from "../layanan/DynamicReactQuill";
import { Layanan } from "@/services/layanan";
import { FetchTriggerContext } from "@/context/fetchTrigger";

// firebase
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "@/lib/firebase/init";
import { ModalAppearContext } from "@/context/modalAppear";
import Image from "next/image";

const TambahLayanan = () => {
  const [value, setValue] = useState<string>("");
  const { setFetchTrigger }: any = useContext(FetchTriggerContext);
  const { setShowModal }: any = useContext(ModalAppearContext);
  const [image, setImage] = useState<File | null>(null);
  const storage = getStorage(app);

  const handleAddLayanan = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form: any = e.target as HTMLFormElement;
    const data = {
      title: form.title.value,
      tagihan: form.tagihan.value,
      kontak: form.kontak.value,
      keterangan: value,
      ketSingkat: form.ketsingkat.value,
      image: "",
    };
    const response = await Layanan.addLayanan(data);
    console.log(response);
    if (response.data.status) {
      const idLayanan = response.data.data;
      const image = form.image.files[0];
      const newName = `layanan-image.${image.name.split(".")[1]}`;
      const storageRef = ref(storage, `images/layanan/${idLayanan}/${newName}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((imageURL) => {
            const layananImage = async () => {
              const response = await Layanan.updateImageLayanan({
                idLayanan,
                imageURL,
              });
              if (response.data.status) {
                setFetchTrigger((prev: any) => !prev);
                setShowModal(false);
              } else {
                console.log(response);
              }
            };
            layananImage();
          });
        }
      );
    } else {
      console.log(response);
    }
  };

  return (
    <Modal>
      <div className="max-w-[35em] w-full h-[32em] overflow-auto bg-white p-5">
        <form
          onSubmit={(e) => handleAddLayanan(e)}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Title"
            className="text-sm focus:outline-none border-[2px] border-[#990000] px-3 py-2 rounded-md"
            name="title"
          />
          <input
            type="text"
            placeholder="tagihan"
            className="text-sm focus:outline-none border-[2px] border-[#990000] px-3 py-2 rounded-md"
            name="tagihan"
          />
          <input
            type="text"
            placeholder="kontak"
            className="text-sm focus:outline-none border-[2px] border-[#990000] px-3 py-2 rounded-md"
            name="kontak"
          />
          <input
            type="text"
            placeholder="keterangan singkat layanan"
            className="text-sm focus:outline-none border-[2px] border-[#990000] px-3 py-2 rounded-md"
            name="ketsingkat"
          />
          <DynamicReactQuill
            value={value}
            onChange={(content: string) => setValue(content)}
          />
          <div className="flex justify-center gap-3">
            <label
              htmlFor="image"
              className="text-sm text-gray-700 border-2 text-center p-2 rounded-md w-[10em] hover:cursor-pointer"
            >
              masukan gambar disini, maximal <strong>1mb</strong>
            </label>
            {image && (
              <Image src={image ? URL.createObjectURL(image) : ""} alt="" width={100} height={100} className="w-[10em]"/>
            )}
          </div>
          <input
            onChange={(e: any) => setImage(e.target.files[0])}
            id="image"
            name="image"
            type="file"
            className="hidden"
          />
          <button
            type="submit"
            className="text-sm border-2 border-[#990000] text-[#990000] hover:bg-[#990000] hover:text-white py-1 rounded-md"
          >
            Tambah Layanan
          </button>
        </form>
      </div>
    </Modal>
  );
};
export default TambahLayanan;
