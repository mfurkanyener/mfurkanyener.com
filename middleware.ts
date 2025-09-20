// middleware.ts (root)
import createIntlMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './next-intl.config';

export default createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always',
    localeDetection: true,
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};