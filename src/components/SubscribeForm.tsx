"use client";

import { supabase } from "../lib/supabase";
import { useState } from "react";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function SubscribeForm() {
    const [email, setEmail] = useState("");
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null); // ← TAŞINDI
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "invalid-email">("idle");

    const Countdown = dynamic(() => import("./Countdown"), { ssr: false });

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            setStatus("invalid-email");
            return;
        }

        if (!recaptchaToken) {
            alert("Lütfen reCAPTCHA doğrulamasını tamamlayın.");
            return;
        }

        setStatus("loading");

        try {
            const recaptchaRes = await fetch("/api/verify-recaptcha", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: recaptchaToken }),
            });

            const data = await recaptchaRes.json();

            if (!data.success) {
                console.error("reCAPTCHA doğrulama hatası:", data["error-codes"]);
                setStatus("error");
                return;
            }

            const formData = {
                user_email: email,
                date: new Date().toLocaleString("tr-TR"),
            };

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            await supabase.from("subscribers").insert([{ email }]);

            setStatus("success");
            setEmail("");
        } catch (error) {
            console.error("Form error:", error);
            setStatus("error");
        }
        const { data: existing, error: lookupError } = await supabase
            .from("subscribers")
            .select("*")
            .eq("email", email);

        if (lookupError) {
            console.error("Veritabanı sorgusu hatası:", lookupError);
            setStatus("error");
            return;
        }

        if (existing.length > 0) {
            console.warn("Bu email zaten abone olmuş.");
            setStatus("success"); // İstersen ayrı bir durum da tanımlayabilirsin
            return;
        }

        await supabase.from("subscribers").insert([{ email }]);
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
                    disabled={status === "loading"}
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                >
                    {status === "loading" ? "Gönderiliyor..." : "Kaydol"}
                </button>
            </div>
            {status === "success" && <p className="text-green-500 text-sm">Başarıyla gönderildi!</p>}
            {status === "error" && <p className="text-red-500 text-sm">Sunucu hatası oluştu, tekrar deneyin.</p>}
            {status === "invalid-email" && <p className="text-yellow-400 text-sm">Geçersiz email adresi</p>}
            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(token) => setRecaptchaToken(token)}
                theme="dark"
            />
        </form>
    );
}