import { addLayanan } from "@/lib/firebase/service";
import { apiResponse } from "@/utils/apiResponse";
import { verifyToken } from "@/utils/verifyToken";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  return await verifyToken(req, async () => {
    const response = await addLayanan(data);
    return apiResponse(response, "berhasil ditambah", response);
  });
}
