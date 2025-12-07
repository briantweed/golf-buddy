import dynamic from "next/dynamic";
import useStyling from "@hooks/useStyling";
import styles from "./styles.module.scss";

import Label from "../../layout/Label";
import Input from "../../inputs/Input";

const ErrorMessage = dynamic(() => import("../../layout/ErrorMessage"));


const InputField = (props) => {

    const {
        register,
        error,
        config: {
            id,
            required,
            styling,
            label: {
                content,
                ...labelProps
            },
            input
        }
    } = props;


    const updatedStyles = {
        ...styling,
        color: error ? "warning" : ""
    };


    const className = useStyling(styles, styling);


    return (
        <div className={styles.formField}>

            <div className={className}>

                {content && (
                    <Label
                        id={id}
                        data-cy={`th_${id}-Label`}
                        required={required}
                        styling={updatedStyles}
                        {...labelProps}
                    >{content}</Label>
                )}

                <Input
                    id={id}
                    data-cy={`th_${id}-Input`}
                    error={error}
                    required={required}
                    styling={updatedStyles}
                    register={register(id)}
                    {...input}
                />

            </div>

            {error && (
                <ErrorMessage>{error.message}</ErrorMessage>
            )}

        </div>
    );

};


export default InputField;
