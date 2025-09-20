'use client';

import {useLocale} from 'next-intl';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

export default function LanguageToggle() {
    const locale = useLocale();             // Şu anki dil
    const pathname = usePathname();         // /tr, /en veya alt path

    // Diğer dili hesapla
    const nextLocale = locale === 'tr' ? 'en' : 'tr';

    return (
        <div className="absolute top-4 right-4 text-sm">
            <Link href={`/${nextLocale}${pathname.replace(/^\/(tr|en)/, '')}`}>
                {nextLocale.toUpperCase()}
            </Link>
        </div>
    );
}