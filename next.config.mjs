import * as pwa from "@ducanh2912/next-pwa";

const withPWA = pwa.default({
    dest: 'public',
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    fallback: {
        document: "/offline"
    }
});


const nextConfig = {
    reactStrictMode: true,
    devIndicators: false,
    output: "standalone",
    env: {
        VERSION: "0.1.4",
        TITLE: "Golf Buddy",
        SUBTITLE: "Scorecard",
        LOCALE_STRING: "en-GB",
        DEFAULT_TIMEZONE: "Europe/London"
    }
};

export default withPWA(nextConfig);
