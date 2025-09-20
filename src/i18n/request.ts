import {getRequestConfig} from 'next-intl/server';

const SUPPORTED = ['tr', 'en'] as const;
const FALLBACK = 'tr' as const;

export default getRequestConfig(async ({locale}) => {
    // "en-US" gibi değerler gelirse "en"e indir
    const normalized = (locale ?? '').toLowerCase().split('-')[0] as 'tr' | 'en';
    const safe = (SUPPORTED as readonly string[]).includes(normalized) ? normalized : FALLBACK;

    const messages = (await import(`../messages/${safe}.json`)).default;

    return {
        locale: safe,
        messages
    };
});