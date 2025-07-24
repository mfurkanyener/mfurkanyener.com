// app/api/verify-recaptcha/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { token } = await req.json();

    const secretKey = process.env.RECAPTCHA_SECRET_KEY!;
    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const response = await fetch(verifyURL, { method: "POST" });
    const data = await response.json();

    if (!data.success) {
        return NextResponse.json({ success: false }, { status: 400 });
    }

    return NextResponse.json({ success: true });
}