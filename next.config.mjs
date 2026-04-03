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
        VERSION: "0.0.1",
        TITLE: "Golf Buddy",
        SUBTITLE: "Main Menu",
        LOCALE_STRING: "en-GB",
        DEFAULT_TIMEZONE: "Europe/London"
    },
    turbopack: {}
};

export default withPWA(nextConfig);
