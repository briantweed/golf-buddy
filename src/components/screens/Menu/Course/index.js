import form from "@files/forms/course";
import validation from "@files/validation/course.zod";
import useFormSubmission from "@hooks/useFormSubmission";

import FormContainer from "@components/general/FormContainer";
import FormBuilder from "@libraries/FormBuilder";
import Message from "@components/general/Message";


const Course = () => {

    const {settings, display, handleSubmit} = useFormSubmission();


    return (
        <FormContainer>

            <FormBuilder
                key={settings?.CourseName || "new"}
                form={form}
                validation={validation}
                handleSubmit={handleSubmit}
                settings={{
                    defaultValues: settings
                }}
            />

            {display && (
                <Message><div className="text-darkGreen font-bold">&#10003;</div> updated</Message>
            )}

        </FormContainer>
    );

};


export default Course;