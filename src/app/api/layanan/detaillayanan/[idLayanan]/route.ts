import { getDetailLayanan } from "@/lib/firebase/service";
import { apiResponse } from "@/utils/apiResponse";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { idLayanan: string } }
) {
  const response = await getDetailLayanan(params.idLayanan);
  return apiResponse(response, "berhasil ambil detail layanan", response);
}
