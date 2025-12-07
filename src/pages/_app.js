import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {useGSAP} from "@gsap/react";
import "@public/styles.min.css";


function MyApp({Component, pageProps}) {

    gsap.registerPlugin(useGSAP, Draggable, DrawSVGPlugin);

    gsap.config({
        nullTargetWarn: false,
        trialWarn: false
    });

    return (
        <Component {...pageProps}/>
    );

}


export default MyApp;