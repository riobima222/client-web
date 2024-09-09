import instance from "@/lib/axios/init";
import { LayananInter } from "../interface";

export const Layanan = {
  getAllLayanan() {
    return instance.get("/api/layanan/asisten-jurnal");
  },
  addLayanan(data: LayananInter) {
    return instance.post("/api/layanan/addlayanan", data);
  },
  updateImageLayanan(data: { idLayanan: string; imageURL: string }) {
    return instance.post("/api/layanan/updateimagelayanan", data);
  },
  getDetailLayanan(idLayanan: string) {
    return instance.get(`/api/layanan/detaillayanan/${idLayanan}`);
  },
};
