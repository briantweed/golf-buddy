import gsap from "gsap";


const fadeOutSlideDownModalAnimation = () => {

    gsap.fromTo(`[data-gsap="GSAP_MODAL_CONTAINER"] [data-gsap="GSAP_MODAL"]`, {
        opacity: 1,
        y: 0
    }, {
        opacity: 0,
        y: 30,
        duration: 0.3,
        ease: "sine.out"
    });

    gsap.fromTo(`[data-gsap="GSAP_MODAL_CONTAINER"]`, {
        opacity: 1
    }, {
        opacity: 0,
        duration: 0.3,
        delay: 0.2,
        ease: "sine.out"
    });

};


export default fadeOutSlideDownModalAnimation;