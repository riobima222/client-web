import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getAllLayanan } from "@/lib/firebase/service";
import { apiResponse } from "@/utils/apiResponse";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7);
    try {
      await new Promise((resolve, reject) => {
        jwt.verify(token, process.env.NEXTAUTH_SECRET || "", (err, decoded) => {
          if (err) reject(err);
          else resolve(decoded);
        });
      });
      const response = await getAllLayanan();
      return apiResponse(response, "berhasil ambil layanan", response);
    } catch (err) {
      return NextResponse.json({ status: false, message: "token tidak valid" });
    }
  } else {
    return NextResponse.json({ status: false, message: "token tidak ada" });
  }
}
