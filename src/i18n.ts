import { getRequestConfig, type GetRequestConfigParams } from 'next-intl/server';

// Türkçe
import trCommon from '@/messages/tr.json';
// … diğer tr JSON'ları

// İngilizce
import enCommon from '@/messages/en.json';
// … diğer en JSON'ları

const SUPPORTED = ['tr', 'en'] as const;
const FALLBACK = 'tr' as const;
export const locales = ['tr', 'en'] as const;
export const defaultLocale = 'tr';

export default getRequestConfig(async ({ locale }: GetRequestConfigParams) => {
    const safe =
        (SUPPORTED as readonly string[]).includes(locale ?? '')
            ? (locale as (typeof SUPPORTED)[number])
            : FALLBACK;

    const messages =
        safe === 'tr'
            ? {
                ...trCommon,
                // diğer tr dosyaları...
            }
            : {
                ...enCommon,
                // diğer en dosyaları...
            };

    return {
        locale: safe,
        messages
    };
});