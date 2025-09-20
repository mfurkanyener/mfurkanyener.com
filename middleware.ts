// middleware.ts
import createIntlMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './next-intl.config';

export default createIntlMiddleware({
    locales,
    defaultLocale
});

// "/" mutlaka ayrı yazılmalı; ardından dil-prefiksli tüm rotalar
export const config = {
    matcher: ['/', '/(tr|en)/:path*']
};