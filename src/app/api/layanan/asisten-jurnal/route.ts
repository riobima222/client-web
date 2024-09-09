import { getAllLayanan } from "@/lib/firebase/service";
import { apiResponse } from "@/utils/apiResponse";

export async function GET() {
  const response = await getAllLayanan();
  return apiResponse(response, "berhasil ambil layanan", response);
}
