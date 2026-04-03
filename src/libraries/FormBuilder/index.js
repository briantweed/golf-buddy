import useFormBuilder from "@libraries/FormBuilder/useFormBuilder";


const FormBuilder = (props) => {

    const {
        form,
        validation,
        handleSubmit,
        settings
    } = props;

    const renderedForm = useFormBuilder(form, validation, handleSubmit, settings);


    return (
        <div>{renderedForm}</div>
    );

};


export default FormBuilder;