// /app/api/verify-recaptcha/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (!secretKey) {
            console.error('RECAPTCHA_SECRET_KEY eksik');
            return NextResponse.json({ success: false, error: 'Sunucu yapılandırması eksik' }, { status: 500 });
        }

        const { token } = await req.json();
        if (!token) {
            return NextResponse.json({ success: false, error: 'Token eksik' }, { status: 400 });
        }

        const formData = new URLSearchParams();
        formData.append("secret", secretKey);
        formData.append("response", token);

        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData.toString(),
        });

        const contentType = response.headers.get("content-type");
        if (!contentType?.includes("application/json")) {
            const fallback = await response.text();
            console.warn("Beklenmeyen içerik tipi:", fallback);
            return NextResponse.json({ success: false, error: 'Geçersiz yanıt alındı' }, { status: 500 });
        }

        const data = await response.json();
        const isSuspicious = data.score !== undefined && data.score < 0.5;

        if (!data.success || isSuspicious) {
            console.error('reCAPTCHA başarısız:', data['error-codes'] || data);
            return NextResponse.json({ success: false, error: 'Doğrulama geçersiz veya şüpheli' }, { status: 400 });
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error('reCAPTCHA server hatası:', error);
        return NextResponse.json({ success: false, error: 'Sunucu hatası' }, { status: 500 });
    }
}
