"use client";

import Footer from "@/components/footer/footer";
import ClientNavbar from "@/components/navbar/clientNavbar";
import { getLayanan } from "@/services/auth/getlayanan";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";

const datademo = [
  {
    gambar:
      "https://firebasestorage.googleapis.com/v0/b/website-client1.appspot.com/o/images%2Flayanan%2Flayanan-image1.jpg?alt=media&token=9e608d14-8a6c-443f-851c-dd7d842d593f",
    kategori: "Layanan asisten jurnal",
    judul: "asistensi akreditasi jurnal nasional",
    tagihan: "Sekali bayar",
    keterangan:
      "Mempersiapkan informasi yang ada di website jurnal baik policy maupun dokumen-dokumen lainnya seperti author guidelines, peer review process, journal history dan publication ethics serta ketentuan lain yang disyaratkan dalam Akreditasi Jurnal Nasional(ARJUNA). Selain itu kami juga membantu melakukan pekerjaan berikut: <br/> ",
    kontak: "08123123123",
  },
  {
    gambar:
      "https://firebasestorage.googleapis.com/v0/b/website-client1.appspot.com/o/images%2Flayanan%2Flayanan-image2.jpg?alt=media&token=50128d7f-42e8-42ce-be6d-6b85976c5660",
    kategori: "Layanan asisten jurnal",
    judul: "asistensi akreditasi jurnal nasional",
    tagihan: "Sekali bayar",
    keterangan:
      "Mempersiapkan informasi yang ada di website jurnal baik policy maupun dokumen-dokumen lainnya seperti author guidelines, peer review process, journal history dan publication ethics serta ketentuan lain yang disyaratkan dalam Akreditasi Jurnal Nasional(ARJUNA). Selain itu kami juga membantu melakukan pekerjaan berikut: <br/> ",
    kontak: "08123123123",
  },
  {
    gambar:
      "https://firebasestorage.googleapis.com/v0/b/website-client1.appspot.com/o/images%2Flayanan%2Flayanan-image2.jpg?alt=media&token=50128d7f-42e8-42ce-be6d-6b85976c5660",
    kategori: "Layanan asisten jurnal",
    judul: "asistensi akreditasi jurnal nasional",
    tagihan: "Sekali bayar",
    keterangan:
      "Mempersiapkan informasi yang ada di website jurnal baik policy maupun dokumen-dokumen lainnya seperti author guidelines, peer review process, journal history dan publication ethics serta ketentuan lain yang disyaratkan dalam Akreditasi Jurnal Nasional(ARJUNA). Selain itu kami juga membantu melakukan pekerjaan berikut: <br/> ",
    kontak: "08123123123",
  },
];

const LayananPage = () => {
  const kontakRef = useRef<HTMLDivElement>(null);
  const [layanan, setLayanan] = useState([]);
  const { data: session } = useSession();
  console.log(layanan);

  useEffect(() => {
    if (session) {
      const fetchLayanan = async () => {
        const response = await getLayanan.getAllLayanan();
        if (response.data.status) {
          setLayanan(response.data.data);
        } else {
          console.log(response.data.message);
          alert("error mengambil data layanan");
        }
      };
      fetchLayanan();
    }
  }, [session]);

  const scrollToKontak = () => {
    if (kontakRef.current) {
      kontakRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="-PROFILE- overflow-x-hidden">
      <ClientNavbar scroll={{ scrollToKontak }} />
      <div className="-HERO- px-0 sm:px-5 mt-5 pt-20">
        <div className="-IMAGE- flex pe-7 pb-7 justify-end items-end h-[13em] md:h-[17em] bg-[url('/images/banner.jpg')]">
          <h1 className="text-3xl text-white font-bold">Layanan</h1>
        </div>
      </div>

      <div className="-LAYANAN- px-5">
        <div className="bg-[#f2f2f2] min-h-[20em] mt-8 p-4">
          <h1 className="font-bold text-2xl text-center mb-5 text-yellow-500">
            Semua Layanan
          </h1>
          <div className="max-w-[65em] mx-auto flex">
            <div className="-BUTTON- flex items-center hover:cursor-pointer border-2 border-yellow-400 text-yellow-400 px-2 p-1 rounded-md hover:bg-yellow-400 hover:text-white">
              <div>
                <IoIosAdd className="text-2xl" />
              </div>
              <span>Tambahkan layanan</span>
            </div>
          </div>
          <div className="-CONTENT- max-w-[65em] mb-16 mx-auto py-3 flex flex-wrap gap-5 justify-start">
            {datademo.map((item, index) => (
              <div
                key={index}
                className="-CARD- w-[20em] min-h-[14em] bg-white p-2 rounded-md flex flex-col items-start gap-4"
              >
                <Image
                  src={item.gambar}
                  alt="tes"
                  width={700}
                  height={700}
                  className="w-full h-[160px] object-cover"
                />
                <div className="flex items-center justify-start px-3 gap-2 bg-[rgba(60,250,215,.2)] rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <h4 className="text-sm">Layanan</h4>
                </div>
                <div>
                  <h2 className="font-bold underline hover:no-underline hover:cursor-pointer hover:text-blue-400">
                    {item.judul}
                  </h2>
                  <div className="flex items-center justify-start mt-3">
                    <button
                      type="button"
                      className="px-5 py-2 bg-green-400 text-white rounded-md"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer kontakRef={kontakRef} />
    </div>
  );
};
export default LayananPage;
