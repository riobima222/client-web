import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export const verifyToken = async (req: NextRequest, callback: Function) => {
  const authHeader = req.headers.get("Authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7);
    try {
      const decoded = await new Promise((resolve, reject) => {
        jwt.verify(
          token,
          process.env.NEXTAUTH_SECRET || "",
          (err: any, decoded: any) => {
            if (err) reject(err);
            else resolve(decoded);
          }
        );
      });
      return await callback(decoded);
    } catch (err) {
      return NextResponse.json({
        status: false,
        message: "token tidak valid",
      });
    }
  } else {
    return NextResponse.json({ status: false, message: "token tidak ada" });
  }
};
