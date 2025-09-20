import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (!secretKey) {
            return NextResponse.json(
                { success: false, error: 'Sunucu yapılandırması eksik' },
                { status: 500 }
            );
        }

        const { token } = await req.json();
        if (!token) {
            return NextResponse.json(
                { success: false, error: 'Token eksik' },
                { status: 400 }
            );
        }

        const formData = new URLSearchParams();
        formData.append('secret', secretKey);
        formData.append('response', token);

        const response = await fetch(
            'https://www.google.com/recaptcha/api/siteverify',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formData.toString(),
            }
        );

        const data: {
            success: boolean;
            challenge_ts?: string;
            hostname?: string;
            'error-codes'?: string[];
            score?: number;
        } = await response.json();

        // v2 için "score" olmayabilir, normaldir
        const isSuspicious =
            typeof data.score === 'number' && data.score < 0.5;

        if (!data.success || isSuspicious) {
            return NextResponse.json(
                { success: false, error: 'Doğrulama başarısız', details: data },
                { status: 400 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        // tip güvenli log
        console.error(
            'verify-recaptcha error',
            error instanceof Error ? error.message : error
        );
        return NextResponse.json(
            { success: false, error: 'Sunucu hatası' },
            { status: 500 }
        );
    }
}

export function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}