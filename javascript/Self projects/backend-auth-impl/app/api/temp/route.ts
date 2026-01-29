import { NextResponse } from "next/server";

export async function GET(request:Request) {
    return new NextResponse("Aji Lun mera")
}