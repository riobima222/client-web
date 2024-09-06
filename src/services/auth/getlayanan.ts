import instance from "@/lib/axios/init";

export const getLayanan = {
  getAllLayanan() {
    return instance.get("/api/layanan/asisten-jurnal");
  },
};
