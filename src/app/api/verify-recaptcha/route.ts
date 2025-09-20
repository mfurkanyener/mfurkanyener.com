import { NextResponse } from 'next/server';

type VerifyResp = {
    success: boolean;
    'error-codes'?: string[];
    hostname?: string;
    challenge_ts?: string;
    score?: number; // v2'de normalde yok
};

export async function POST(req: Request) {
    try {
        const secret = (process.env.RECAPTCHA_SECRET_KEY || '').trim();
        if (!secret) {
            return NextResponse.json({ ok: false, error: 'missing_secret' }, { status: 500 });
        }

        const { token } = (await req.json()) as { token?: string };
        if (!token) {
            return NextResponse.json({ ok: false, error: 'missing_token' }, { status: 400 });
        }

        const body = new URLSearchParams({ secret, response: token.trim() }).toString();

        const r = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            body
        });

        const data = (await r.json()) as VerifyResp;

        // v2'de score olmayabilir; varsa düşükse şüpheli say
        const suspicious = typeof data.score === 'number' && data.score < 0.5;
        const ok = data.success && !suspicious;

        // Debug için details döndürüyoruz; her şey stabil olunca kaldırabilirsin.
        return NextResponse.json({ ok, details: data }, { status: ok ? 200 : 400 });
    } catch (err) {
        console.error('verify-recaptcha error:', err);
        return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
    }
}

// OPTIONS şart değil ama dursun:
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