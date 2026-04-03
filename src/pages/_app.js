import "@public/styles.min.css";
import Head from "next/head";


function MyApp({Component, pageProps}) {

    return (
        <div>
            <Head>
                <link rel="manifest" href="/manifest.json"/>
            </Head>
            <Component {...pageProps}/>
        </div>
    );

}


export default MyApp;