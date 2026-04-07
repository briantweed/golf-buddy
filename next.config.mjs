import * as pwa from "@ducanh2912/next-pwa";

const withPWA = pwa.default({
    dest: 'public',
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    exclude: [/dynamic-css-manifest/],
    swcMinify: true,
    fallback: {
        document: "/offline"
    }
});


const nextConfig = {
    reactStrictMode: true,
    devIndicators: false,
    env: {
        VERSION: "0.0.1",
        TITLE: "Golf Buddy",
        SUBTITLE: "Main Menu",
        LOCALE_STRING: "en-GB",
        DEFAULT_TIMEZONE: "Europe/London"
    }
};

export default withPWA(nextConfig);
