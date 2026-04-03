import useFormSubmission from "@hooks/useFormSubmission";
import form from "@files/forms/players";
import validation from "@files/validation/players.zod";

import FormContainer from "@components/general/FormContainer";
import FormBuilder from "@libraries/FormBuilder";
import Message from "@components/general/Message";


const Players = () => {

    const {settings, display, handleSubmit} = useFormSubmission();


    return (
        <FormContainer>

            <FormBuilder
                key={settings?.Players?.length || "new"}
                form={form}
                validation={validation}
                handleSubmit={handleSubmit}
                settings={{
                    defaultValues: settings
                }}
            />

            {display && (
                <Message>&#10003; updated</Message>
            )}

        </FormContainer>
    );

};


export default Players;