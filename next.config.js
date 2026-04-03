const {join} = require("path");


const moduleExports = {
    reactStrictMode: true,
    devIndicators: false,
    output: "standalone",
    env: {
        VERSION: "0.0.1",
        TITLE: "Golf Buddy",
        SUBTITLE: "Scorecard",
        LOCALE_STRING: "en-GB",
        DEFAULT_TIMEZONE: "Europe/London"
    },
    turbopack: {},
    sassOptions: {
        includePaths: [join(__dirname, "styles")],
        implementation: "sass-embedded",
        quietDeps: true,
        silenceDeprecations: ["legacy-js-api"]
    },
    images: {
        loader: "custom",
        loaderFile: "./imageLoader.js"
    },
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                type: "asset/source",
            }
        );
        return config;
    }
};


const withPWA = require("@ducanh2912/next-pwa").default({
    dest: 'public',
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    fallback: {
        document: "/offline"
    }
});

module.exports = withPWA(moduleExports);