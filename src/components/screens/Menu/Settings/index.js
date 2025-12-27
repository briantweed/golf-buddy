import form from "@files/forms/setup";
import validationRules from "@files/validation/setup.zod";
import useFormBuilder from "@libraries/FormBuilder/useFormBuilder";
import useLocalStorage from "@hooks/useLocalStorage";


const Settings = () => {

    const {settings, updateSettings} = useLocalStorage();

    const handleSubmit = (data) => {
        updateSettings(data);
    };

    const renderedForm = useFormBuilder(form, validationRules, null, {
        defaultValues: settings,
        handleWatch: handleSubmit
    });


    return (
        <div className={"bg-darkestGreen p-4 rounded-md"}>{renderedForm}</div>
    );

};


export default Settings;