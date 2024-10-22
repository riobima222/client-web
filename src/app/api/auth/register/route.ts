import { adminRegister } from "@/lib/firebase/service";
import { adminSecretValidation } from "@/utils/adminSecretValidation";
import { authResponse } from "@/utils/authResponse";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const res = adminSecretValidation(data.admin);
  if(res) {
    const response = await adminRegister(data);
    return authResponse(response);
  } else {
    return NextResponse.json({status: false, message: "admin secret salah"});
  }
}