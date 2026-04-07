import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
    cacheOnNavigation: true,
    reloadOnOnline: true,
    swSrc: "sw.ts",
    swDest: "public/sw.js",
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

export default withSerwist(nextConfig);
