import { NextResponse } from "next/server"

export const apiResponse = (response: boolean, message: string) => {
    if(response) {
        return NextResponse.json({status: true, message})
    } else {
        return NextResponse.json({status: false, message: "koneksi firebase gagal"})
    }
}