import {useEffect, useEffectEvent, useState} from "react";
import useLocalStorage from "@hooks/useLocalStorage";


const useFormSubmission = () => {

    const {settings, updateSettings} = useLocalStorage();

    const [display, setDisplay] = useState(false);


    const handleSubmit = (data) => {
        updateSettings(data);
        setDisplay(true);
    };


    const handleDisplay = useEffectEvent((bool) => {
        setDisplay(bool);
    });


    useEffect(() => {
        if (display) {
            setTimeout(() => {
                handleDisplay(false);
            }, 1000);
        }
    }, [display]);


    return {settings, display, handleSubmit};

};


export default useFormSubmission;