import {Html, Head, Main, NextScript} from "next/document";
import MetaTags from "@components/utility/MetaTags";
import Portal from "@components/utility/Portal";


export default function Document() {

    return (
        <Html lang="en">

            <Head>
                <MetaTags/>
            </Head>

            <body>
                <div className="root">
                    <Main/>
                    <Portal/>
                    <NextScript/>
                </div>
            </body>

        </Html>
    );

}
