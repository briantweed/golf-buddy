import gsap from "gsap";



const fadeInSlideUpModalAnimation = () => {

    gsap.fromTo(`[data-gsap="GSAP_MODAL_CONTAINER"]`, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.3,
        ease: "sine.inOut",
    });
    gsap.fromTo(`[data-gsap="GSAP_MODAL_CONTAINER"] [data-gsap="GSAP_MODAL"]`, {
        opacity: 0,
        y: 30,
    }, {
        y: 0,
        delay: 0.2,
        opacity: 1,
        duration: 0.3,
        ease: "sine.out",
    });

};


export default fadeInSlideUpModalAnimation;