// app/api/verify-recaptcha/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { token } = await req.json();
        if (!token) {
            return NextResponse.json({ success: false, error: 'Token eksik' }, { status: 400 });
        }

        const secretKey = process.env.RECAPTCHA_SECRET_KEY!;
        const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

        const response = await fetch(verifyURL, { method: 'POST' });
        const data = await response.json();

        if (!data.success || (data.score !== undefined && data.score < 0.5)) {
            console.error('reCAPTCHA başarısız:', data['error-codes']);
            return NextResponse.json({ success: false, error: 'Doğrulama geçersiz veya şüpheli' }, { status: 400 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('reCAPTCHA server hatası:', error);
        return NextResponse.json({ success: false, error: 'Sunucu hatası' }, { status: 500 });
    }
}
