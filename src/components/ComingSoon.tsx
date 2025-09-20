import Countdown from "./Countdown";
import FadeInWrapper from "./FadeInWrapper";
import LanguageToggle from "./LanguageToggle";
import SubscribeForm from "./SubscribeForm";
import { useTranslations } from "next-intl";


export default function ComingSoon()
{
    const t = useTranslations("comingSoon");


    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-black to-zinc-900 text-white">
            <LanguageToggle/>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                {t("title")}
            </h1>
            <p className="text-lg md:text-xl max-w-xl mb-6 animate-fade-in delay-100">
                {t("description")}
            </p>
            <Countdown targetDate="2025-08-30T00:00:00"/>
            <FadeInWrapper delay={0.2}>
                <h1 className="text-4xl font-bold">furkanyener.dev</h1>
            </FadeInWrapper>
            <SubscribeForm/>
            <p className="text-xs text-gray-400 mt-2">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                Abone olarak <a href="/privacy" className="underline">Gizlilik Politikası</a>’nı kabul etmiş olursunuz.
            </p>
        </main>
    );
}