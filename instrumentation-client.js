import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://f0ca8238178acfbb0ee3e397ab3b6436@o1402101.ingest.us.sentry.io/4509446456344576",
    tracesSampleRate: 1,
    debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;