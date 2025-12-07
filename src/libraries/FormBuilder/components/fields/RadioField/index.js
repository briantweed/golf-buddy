import dynamic from "next/dynamic";
import styles from "./styles.module.scss";

import Label from "../../layout/Label";
import Radio from "../../inputs/Radio";
import Legend from "../../layout/Legend";
import useStyling from "@hooks/useStyling";

const ErrorMessage = dynamic(() => import("../../layout/ErrorMessage"));


const RadioField = (props) => {

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
            input: {
                options,
                ...inputProps
            }
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

                <Legend id={id} required={required}>{content}</Legend>

                <div className={styles.inputs}>
                    {options.map((option, index) => {
                        return (
                            <Label
                                key={index}
                                id={`${id}_${option.value}`}
                                data-cy={`th_${id}-${option.value}-Label`}
                                styling={updatedStyles}
                                {...labelProps}
                            >
                                <Radio
                                    id={id + "_" + option.value}
                                    data-cy={`th_${id}-${option.value}-Input`}
                                    name={id}
                                    error={error}
                                    styling={updatedStyles}
                                    register={register(id)}
                                    value={option.value}
                                    {...inputProps}
                                /> {option.label}
                            </Label>
                        );
                    })}
                </div>

            </div>

            {error && (
                <ErrorMessage>{error.message}</ErrorMessage>
            )}

        </div>
    );

};


export default RadioField;
