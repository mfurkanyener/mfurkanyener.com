// next.config.ts (root)
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Request config yolunu plugin'e veriyoruz:
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    reactStrictMode: true
};

export default withNextIntl(nextConfig);