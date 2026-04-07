import * as pwa from "@ducanh2912/next-pwa";

const withPWA = pwa.default({
    dest: "public",
    exclude: ["/_next/dynamic-css-manifest.json"],
    disable: process.env.NODE_ENV === "development",
    reloadOnOnline: false
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
