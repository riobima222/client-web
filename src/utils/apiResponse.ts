import { NextResponse } from "next/server"

export const apiResponse = (response: boolean | any, message: string, data?: any) => {
    if(response) {
        return NextResponse.json({status: true, message, data})
    } else {
        return NextResponse.json({status: false, message: "koneksi firebase gagal"})
    }
}