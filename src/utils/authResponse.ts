import { NextResponse } from "next/server";

export const authResponse = (response: string | boolean) => {
  switch (response) {
    case "username":
      return NextResponse.json({
        status: false,
        message: "username sudah digunakan",
      });
    case "email":
      return NextResponse.json({
        status: false,
        message: "email sudah digunakan",
      });
    case true:
      return NextResponse.json({ status: true, message: "berhasil mendaftar" });
    default:
      return NextResponse.json({
        status: false,
        message: "koneksi firebase gagal",
      });
  }
};
