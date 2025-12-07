import dynamic from "next/dynamic";
import styles from "./styles.module.scss";

import Label from "../..//layout/Label";
import Checkbox from "../../inputs/Checkbox";

const ErrorMessage = dynamic(() => import("../../layout/ErrorMessage"));


const CheckboxField = (props) => {

    const {
        register,
        error,
        watch = () => {},
        config: {
            id,
            required,
            styling,
            label: {
                content,
                ...labelProps
            },
            input,
            additional
        }
    } = props;


    const updatedStyles = {
        ...styling,
        color: error ? "warning" : ""
    };


    return (
        <div className={`${styles.contents}`}>

            <Label
                id={id}
                data-cy={`th_${id}-Label`}
                required={required}
                styling={updatedStyles}
                {...labelProps}
            >
                <Checkbox
                    id={id}
                    data-cy={`th_${id}-Input`}
                    error={error}
                    required={required}
                    styling={updatedStyles}
                    checked={watch(id)}
                    register={register(id)}
                    {...input}
                /> {content}
            </Label>

            {additional && (
                <p className="text-xs">{additional.content}</p>
            )}

            {error && (
                <ErrorMessage>{error.message}</ErrorMessage>
            )}

        </div>
    );

};


export default CheckboxField;
