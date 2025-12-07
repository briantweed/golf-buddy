import {useCallback, useEffect} from "react";
import {ANIMATION_TIMEOUT_DELAY, OVERLAY_ID, PORTAL_ID} from "@files/config";
import fadeInSlideUpModalAnimation from "@files/animations/fadeIn-slideUp-modal-animation";
import fadeOutSlideDownModalAnimation from "@files/animations/fadeOut-slideDown-modal-animation";
import {useGSAP} from "@gsap/react";


const useModal = (portalRef, props) => {

    const ESCAPE_KEYCODE = 27;

    const {
        display,
        handleClose
    }= props;

    let {
        openModalAnimation = null,
        closeModalAnimation = null
    }= props;

    openModalAnimation = openModalAnimation || fadeInSlideUpModalAnimation;
    closeModalAnimation = closeModalAnimation || fadeOutSlideDownModalAnimation;


    const closeModal = useCallback(() => {
        if (closeModalAnimation) {
            closeModalAnimation();
            setTimeout(() => {
                handleClose();
            }, ANIMATION_TIMEOUT_DELAY);
        } else {
            handleClose();
        }
    }, [closeModalAnimation, handleClose]);


    const handleKeyUp = useCallback((event) => {
        const keyCode = event.keyCode;
        if (keyCode === ESCAPE_KEYCODE) {
            closeModal();
        }
    }, [ESCAPE_KEYCODE, closeModal]);


    const handleClick = useCallback((e) => {
        const elementId = e.target.getAttribute("id");
        if (elementId === OVERLAY_ID) {
            closeModal();
        }
    }, [closeModal]);


    useEffect(() => {
        if (display) {
            document.body.classList.add("overflow-y-hidden");
            setTimeout(() => {
                document.querySelectorAll("[data-lastpass-icon-root]").forEach((el) => {
                    el.style.display = "none";
                });
            }, 500);
        }

        return () => {
            document.body.classList.remove("overflow-y-hidden");
        };
    }, [display]);


    useEffect(() => {
        if (display) {
            window.addEventListener("keyup", handleKeyUp);
            window.addEventListener("click", handleClick);
        }

        return () => {
            window.removeEventListener("keyup", handleKeyUp);
            window.removeEventListener("click", handleClick);
        };
    }, [display, handleClick, handleKeyUp]);


    useEffect(() => {
        portalRef.current = document.querySelector(`#${PORTAL_ID}`);
    }, [portalRef]);


    useGSAP(() => {
        openModalAnimation(display);
    }, {dependencies: [display]});


    return {closeModal};

};


export default useModal;