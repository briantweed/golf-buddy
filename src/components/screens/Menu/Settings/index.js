import form from "@files/forms/setup";
import validationRules from "@files/validation/setup.zod";
import useFormBuilder from "@libraries/FormBuilder/useFormBuilder";
import useLocalStorage from "@hooks/useLocalStorage";
import {useEffect, useState} from "react";


const Settings = () => {

    const {settings, updateSettings} = useLocalStorage();

    const [display, setDisplay] = useState(false);

    const handleSubmit = (data) => {
        updateSettings(data);
        setDisplay(true);
    };

    const renderedForm = useFormBuilder(form, validationRules, handleSubmit, {
        defaultValues: settings
    });


    useEffect(() => {
        if (display) {
            setTimeout(() => {
                setDisplay(false);
            }, 1000)
        }
    })


    return (
        <div className={"bg-darkestGreen p-4 rounded-md relative"}>
            {renderedForm}
            {display && (
                <div className="absolute right-5 bottom-1.5 text-sm text-pastel-green-1  italic">&#10003; updated</div>
            )}
        </div>
    );

};


export default Settings;