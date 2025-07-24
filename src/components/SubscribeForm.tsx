"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function SubscribeForm() {
    const [email, setEmail] = useState("");
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error" | "invalid-email" | "already-subscribed"
    >("idle");

    const [isSubmitting, setIsSubmitting] = useState(false);

    const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost";

    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase());

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isSubmitting) return;
        setIsSubmitting(true);

        const normalizedEmail = email.trim().toLowerCase();

        if (!isValidEmail(normalizedEmail)) {
            setStatus("invalid-email");
            setIsSubmitting(false);
            return;
        }

        if (!isLocal && !recaptchaToken) {
            alert("Lütfen reCAPTCHA doğrulamasını tamamlayın.");
            setIsSubmitting(false);
            return;
        }

        setStatus("loading");

        try {
            if (!isLocal) {
                const recaptchaRes = await fetch("/api/verify-recaptcha", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token: recaptchaToken }),
                });

                const recaptchaData = await recaptchaRes.json();
                if (!recaptchaData.success) {
                    console.error("reCAPTCHA doğrulama hatası:", recaptchaData["error-codes"]);
                    setStatus("error");
                    return;
                }
            }

            const { data: existing, error: lookupError } = await supabase
                .from("subscribers")
                .select("*")
                .eq("email", normalizedEmail);

            if (lookupError) {
                console.error("Veritabanı sorgusu hatası:", lookupError);
                setStatus("error");
                return;
            }

            if (existing.length > 0) {
                setStatus("already-subscribed");
                return;
            }

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    user_email: normalizedEmail,
                    date: new Date().toLocaleString("tr-TR"),
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            const { error: insertError } = await supabase
                .from("subscribers")
                .insert([{ email: normalizedEmail }]);

            if (insertError) {
                console.error("Kayıt hatası:", insertError);
                setStatus("error");
                return;
            }

            setStatus("success");
            setEmail("");
        } catch (err) {
            console.error("Form error:", err);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={sendEmail}
            className="flex flex-col items-center gap-2 mt-4 animate-fade-in delay-300"
        >
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (status !== "idle") setStatus("idle");
                    }}
                    placeholder="Email adresinizi girin"
                    className="px-4 py-2 rounded-md border border-gray-300 text-white w-full sm:w-auto"
                />

                <button
                    type="submit"
                    disabled={status === "loading" || isSubmitting}
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                >
                    {status === "loading" ? "Gönderiliyor..." : "Kaydol"}
                </button>
            </div>

            {status === "already-subscribed" && (
                <p className="text-yellow-400 text-sm">Bu e-posta adresi zaten abone olmuş.</p>
            )}
            {status === "success" && (
                <p className="text-green-500 text-sm">Başarıyla gönderildi!</p>
            )}
            {status === "error" && (
                <p className="text-red-500 text-sm">Sunucu hatası oluştu, tekrar deneyin.</p>
            )}
            {status === "invalid-email" && (
                <p className="text-yellow-400 text-sm">Geçersiz email adresi</p>
            )}

            {!isLocal && (
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={(token) => setRecaptchaToken(token)}
                    theme="dark"
                />
            )}
        </form>
    );
}