import Countdown from "./Countdown";
import FadeInWrapper from "./FadeInWrapper";
import LanguageToggle from "./LanguageToggle";
import SubscribeForm from "./SubscribeForm";

export default function ComingSoon() {
    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-black to-zinc-900 text-white">
            <LanguageToggle/>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                Yeni Kişisel Sitem Çok Yakında
            </h1>
            <p className="text-lg md:text-xl max-w-xl mb-6 animate-fade-in delay-100">
                Tasarım, performans ve içerik konusunda sizi şaşırtacak. Yepyeni içerikler ve sürprizler için takipte
                kalın!
            </p>
            <Countdown targetDate="2025-08-30T00:00:00"/>
            <FadeInWrapper delay={0.2}>
                <h1 className="text-4xl font-bold">furkanyener.dev</h1>
            </FadeInWrapper>
            <SubscribeForm/>
            <p className="text-xs text-gray-400 mt-2">
                Abone olarak <a href="/privacy" className="underline">Gizlilik Politikası</a>’nı kabul etmiş olursunuz.
            </p>
        </main>
    );
}