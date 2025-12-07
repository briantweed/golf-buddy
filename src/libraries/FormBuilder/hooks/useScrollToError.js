import {useCallback, useEffect, useState} from "react";


const useScrollToError = (scrollId = null) => {

    const [element, setElement] = useState(null);

    const focusElement = useCallback(() => {
        if (element) {
            if (element.ref && !element.ref.hasOwnProperty("name")) {
                element.ref.focus();
            } else {
                const input = document.getElementById(element.ref.name).querySelector("input");
                if (input) {
                    input.focus();
                }
            }
            setElement(null);
        }
    }, [element]);


    const scroll = useCallback((top, ele) => {
        if (top === ele) {
            focusElement();
        }
        const scrollContainer = scrollId ? document.getElementById(scrollId) : window;
        scrollContainer.scrollTo({
            top: top,
            behavior: "smooth"
        });
    }, [focusElement, scrollId]);


    useEffect(() => {
        const scrollContainer = scrollId ? document.getElementById(scrollId) : window;
        if (scrollContainer) {
            scrollContainer.addEventListener("scrollend", focusElement);
        }

        return () => {
            const scrollContainer = scrollId ? document.getElementById(scrollId) : window;
            if (scrollContainer) {
                scrollContainer.removeEventListener("scrollend", focusElement);
            }
        };
    }, [focusElement, scrollId]);

    useEffect(() => {
        const scrollContainer = scrollId ? document.getElementById(scrollId) : window;
        if (scrollContainer) {
            scrollContainer.addEventListener("focus", () => setElement(null));
        }

    }, [scrollId]);


    useEffect(() => {

        if (element) {
            const scrollContainer = scrollId ? document.getElementById(scrollId).scrollTop : window.scrollY;
            if (element.ref) {
                if (element.ref.hasOwnProperty("name")) {
                    const domElement = /\./g.test(element.ref.name) ? document.querySelector(`[data-id="${element.ref.name}"]`) : document.querySelector(`#${element.ref.name}`);
                    if (domElement) {
                        domElement.focus();
                        // eslint-disable-next-line react-hooks/set-state-in-effect
                        scroll(domElement.getBoundingClientRect().top + scrollContainer - 10, scrollContainer);
                    }
                } else {
                    scroll(element.ref.getBoundingClientRect().top + scrollContainer - 10, scrollContainer);

                }
            } else {
                const errorRef = document.querySelector("[data-error]");
                if (errorRef) {
                    scroll(document.querySelector(`#${errorRef.getAttribute("data-error")}`).getBoundingClientRect().top + scrollContainer - 10, scrollContainer);
                } else {
                    scroll(document.querySelector(`form`).getBoundingClientRect().top + scrollContainer - 5, scrollContainer);
                }
            }
        }
    }, [element, scroll, scrollId]);


    const scrollToError = useCallback((errors) => {

        const errorsValues = Object.values(errors).map((error) => {
            if (Array.isArray(error)) {
                const fieldArrayErrorSet = error.filter((value) => value)[0];
                if (fieldArrayErrorSet) {
                    return fieldArrayErrorSet[Object.keys(fieldArrayErrorSet)[0]];
                }
                return false;
            }
            return error;
        }).filter((value) => value);

        if (errorsValues.length > 0) {
            const element = errorsValues[0];
            if (element) {
                setElement(element);
            }
        }

    }, []);


    return [scrollToError];

};


export default useScrollToError;