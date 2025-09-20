// src/app/[locale]/layout.tsx
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {ReactNode} from 'react';
import {locales, type Locale} from '../../../next-intl.config';
import '@/styles/globals.css';

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: ReactNode;
    params: Promise<{ locale: string }>;   // Next 15: Promise!
}) {
    const { locale } = await params;

    if (!locales.includes(locale as Locale)) {
        notFound();
    }

    const messages = (await import(`@/messages/${locale}.json`)).default;

    // DİKKAT: html/body YOK!
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}