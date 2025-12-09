import dynamic from "next/dynamic";
import {Controller} from "react-hook-form";
import styles from "./styles.module.scss";

import Label from "../../layout/Label";
import TypeAhead from "../../inputs/TypeAhead";
import useStyling from "../../../hooks/useStyling";

const ErrorMessage = dynamic(() => import("../../layout/ErrorMessage"));


const TypeAheadField = (props) => {

    const {
        control,
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

            <div
                id={id}
                data-id={id}
                className={className}
            >

                {content && (
                    <Label
                        id={id}
                        data-cy={`th_${id}-Label`}
                        required={required}
                        styling={updatedStyles}
                        {...labelProps}
                        onClick={() => document.getElementById(id).querySelector("input").focus()}
                    >{content}</Label>
                )}

                <Controller
                    name={id}
                    control={control}
                    render={({field: {ref, onChange, ...field}}) => {
                        let defaultValue;
                        if (Array.isArray(field.value)) {
                            defaultValue = field.value.map((item) => {
                                return options?.find((option) => option.value === item);
                            });
                        }

                        return (
                            <TypeAhead
                                id={id}
                                data-cy={`th_${id}-Input`}
                                instanceId={id}
                                options={options}
                                styling={updatedStyles}
                                error={error}
                                inputRef={ref}
                                onChange={(selectedOption) => {
                                    let selection;
                                    if (Array.isArray(selectedOption)) {
                                        selection = selectedOption.map((item) => item.value);
                                    } else {
                                        selection = selectedOption?.value || "";
                                    }
                                    onChange(selection);
                                }}
                                defaultValue={defaultValue}
                                {...field}
                                {...inputProps}
                            />
                        );
                    }}
                />

            </div>

            {error && (
                <ErrorMessage>{error.message}</ErrorMessage>
            )}

        </div>
    );

};


export default TypeAheadField;
