// src/app/[locale]/layout.tsx
import "@/styles/globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {ReactNode} from 'react';
import {locales, type Locale} from '../../../next-intl.config';

export default async function LocaleLayout({
                                               children,
                                               params
                                           }: {
    children: ReactNode;
    // DİKKAT: params artık Promise ve await edeceğiz
    params: Promise<{ locale: string }>;
}) {
    const {locale} = await params;

    if (!locales.includes(locale as Locale)) {
        notFound();
    }

    const messages = (await import(`@/messages/${locale}.json`)).default;

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}