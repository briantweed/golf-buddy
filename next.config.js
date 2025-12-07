const {withSentryConfig} = require("@sentry/nextjs");
const {join} = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true"
});


const moduleExports = {
    reactStrictMode: true,
    devIndicators: false,
    output: "standalone",
    env: {
        VERSION: "1.0.0",
        TITLE: "Marketing Hub",
        LOCALE_STRING: "en-US",
        DEFAULT_TIMEZONE: "America/New_York"
    },
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


const sentryConfigSettings = {
    authToken: process.env.SENTRY_AUTH_TOKEN,
    org: "simplyioa",
    project: "pc-toolbox",
    silent: true,
    widenClientFileUpload: true,
    hideSourceMaps: false,
    disableLogger: true,
    automaticVercelMonitors: true,
};


module.exports = withSentryConfig(withBundleAnalyzer(moduleExports), sentryConfigSettings);