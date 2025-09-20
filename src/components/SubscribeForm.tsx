'use client';
import ReCAPTCHA from 'react-google-recaptcha';
import {useRef, useState} from 'react';

export default function SubscribeForm() {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [token, setToken] = useState('');

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!token) return alert('Lütfen robot olmadığınızı doğrulayın.');

        const res = await fetch('/api/verify-recaptcha', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({ token: token.trim() })
        });
        const data = await res.json();

        if (!res.ok || !data?.ok) {
            const codes = data?.details?.['error-codes']?.join(', ') || 'captcha_failed';
            console.error('reCAPTCHA doğrulama hatası:', codes);
            alert('Doğrulama başarısız: ' + codes);
        } else {
            // ✅ burada e-mail kaydını yap
        }

        recaptchaRef.current?.reset(); // token tek kullanımlık
        setToken('');
    };

    return (
        <form onSubmit={onSubmit}>
            {/* email input’un */}
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(t) => setToken(t ?? '')}
            />
            <button type="submit" disabled={!token}>Kaydol</button>
        </form>
    );
}