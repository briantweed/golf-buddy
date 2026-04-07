import { withSerwist } from "@serwist/turbopack";


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
