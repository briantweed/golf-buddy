import form from "@files/forms/setup";
import validationRules from "@files/validation/setup.zod";
import storedGameData from "@files/config/test-game";
import useFormBuilder from "@libraries/FormBuilder/useFormBuilder";


const Settings = () => {

    const handleSubmit = (data) => {
        console.log(data);
    };


    const renderedForm = useFormBuilder(form, validationRules, handleSubmit, {
        defaultValues: storedGameData
    });


    return (
        <div className={"bg-darkestGreen p-4 rounded-md"}>{renderedForm}</div>
    );

};


export default Settings;