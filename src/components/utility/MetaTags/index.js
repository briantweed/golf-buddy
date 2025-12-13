import {FONTS_PATH} from "@files/config";


const MetaTags = () => {

    return (
        <>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

            <title>{`${process.env.TITLE}`}</title>

            <meta name="description" content={process.env.TITLE}/>
            <meta name="copyright" content={process.env.TITLE}/>
            <meta name="language" content="en"/>
            <meta name="rating" content="General"/>
            <meta name="MobileOptimized" content="345"/>
            <meta name="revised" content="Thursday, June 26th, 2025, 12:00pm"/>

            <link rel="manifest" href={"/site.webmanifest"}/>
            <link rel="apple-touch-icon" sizes="144x144" href={"/apple-touch-icon.png"}/>
            <link rel="icon" type="image/png" sizes="96x96" href={"/favicon-96x96.png"}/>
            <link rel="icon" type="image/png" sizes="192x192" href={"/web-app-manifest-192x192.png"}/>

            <meta name="msapplication-TileColor" content="#2d3d32"/>
            <meta name="theme-color" content="#2d3d32"/>
            <meta name="apple-mobile-web-app-title" content={process.env.TITLE}/>
            <meta name="application-name" content={process.env.TITLE}/>

            <link rel="preload" href={`${FONTS_PATH}Poppins-Light.ttf`} as={"font"} crossOrigin="anonymous"/>
            <link rel="preload" href={`${FONTS_PATH}Poppins-Regular.ttf`} as={"font"} crossOrigin="anonymous"/>
            <link rel="preload" href={`${FONTS_PATH}Poppins-Medium.ttf`} as={"font"} crossOrigin="anonymous"/>
            <link rel="preload" href={`${FONTS_PATH}Poppins-SemiBold.ttf`} as={"font"} crossOrigin="anonymous"/>
            <link rel="preload" href={`${FONTS_PATH}Poppins-Bold.ttf`} as={"font"} crossOrigin="anonymous"/>

        </>
    );

};


export default MetaTags;