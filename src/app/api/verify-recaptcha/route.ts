import { NextResponse } from 'next/server';

type VerifyResp = {
    success: boolean;
    'error-codes'?: string[];
    challenge_ts?: string;
    hostname?: string;
    score?: number; // v2'de gelmeyebilir
};

export async function POST(req: Request) {
    try {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (!secretKey) {
            return NextResponse.json({ success: false, error: 'missing_secret' }, { status: 500 });
        }

        const { token } = await req.json() as { token?: string };
        if (!token) {
            return NextResponse.json({ success: false, error: 'missing_token' }, { status: 400 });
        }

        const form = new URLSearchParams();
        form.append('secret', secretKey);
        form.append('response', token);

        const r = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            body: form.toString()
        });

        const data = await r.json() as VerifyResp;

        // 🔎 DEBUG: logla ve details olarak döndür
        console.log('recaptcha verify data:', data);

        const suspicious = typeof data.score === 'number' && data.score < 0.5;
        const ok = data.success && !suspicious;

        return NextResponse.json(
            { ok, details: data },
            { status: ok ? 200 : 400 }
        );
    } catch (err) {
        console.error('verify-recaptcha error', err instanceof Error ? err.message : err);
        return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
    }
}