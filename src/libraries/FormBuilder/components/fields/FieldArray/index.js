import {Fragment} from "react";
import {useFieldArray} from "react-hook-form";
import useStyling from "../../../hooks/useStyling";
import useFieldArrayHelper from "../../../hooks/useFieldArrayHelper";
import FORM_FIELDS from "../../../files/form-fields";
import styles from "./styles.module.scss";

import Legend from "../../layout/Legend";
import ErrorMessage from "../../layout/ErrorMessage";


const FieldArray = (props) => {

    const {
        config: {
            id,
            styling,
            legend,
            subfields,
            appendText,
            deleteText,
            canDeleteInitial,
            incrementFields,
            maximumEntries
        },
        control,
        register,
        error,
        watch,
    } = props;

    const {fields, remove, append} = useFieldArray({
        control,
        name: id,
        shouldUnregister: true
    });

    const {shouldDisplaySubField} = useFieldArrayHelper();

    const defaultFieldObject = subfields.reduce((acc, field) => {
        acc[field.id] = "";
        return acc;
    }, {});


    const className = useStyling(styles, styling);


    const {content, ...rest} = legend;

    const showAppendButton = (maximumEntries === undefined) || (maximumEntries > fields.length);


    return (
        <div className={className}>

            <Legend
                id={id}
                {...rest}
            >{content}</Legend>

            <div>
                <ul>
                    {fields.map((item, index) => {

                        const errorList = [];
                        const errors = error?.[index] || {};
                        Object.values(errors).map((item, index) => {
                            errorList.push(item.message);
                            if (index < Object.values(errors).length - 1) {
                                errorList.push(<span className={styles.pipe}/>);
                            }
                        });


                        const showDeleteButton = (canDeleteInitial || index > 0);

                        return (
                            <Fragment key={item.id}>
                                <li>
                                    <div className={styles.field}>
                                        {subfields.map((field) => {

                                            const {
                                                component,
                                                styling,
                                                related,
                                                ...config
                                            } = field;

                                            let {label} = field;

                                            if (incrementFields) {
                                                label = {
                                                    ...label,
                                                    content: `${label.content} #${(index + 1)}`
                                                };
                                            }

                                            const FormField = FORM_FIELDS[component];

                                            if (shouldDisplaySubField(related, watch, `${id}.${index}`)) {
                                                return (
                                                    <FormField
                                                        key={`field_${field.id}_${index}`}
                                                        register={register}
                                                        config={{
                                                            ...config,
                                                            label: label,
                                                            id: `${id}.${index}.${field.id}`,
                                                            styling: styling
                                                        }}
                                                        control={control}
                                                    />
                                                );
                                            }

                                            return null;

                                        })}

                                        {showDeleteButton && (
                                            <div className={"flex justify-end"}>
                                                <button
                                                    type="button"
                                                    className={styles.delete}
                                                    onClick={() => {
                                                        remove(index);
                                                    }}>{deleteText}
                                                </button>
                                            </div>

                                        )}
                                    </div>

                                    {errorList.length > 0 && (
                                        <div className={styles.error} data-error={id}>
                                            <ErrorMessage>{errorList}</ErrorMessage>
                                        </div>
                                    )}

                                </li>


                            </Fragment>
                        );
                    })}


                </ul>

                <div className={"flex justify-start"}>
                    {showAppendButton && (
                        <button
                            type="button"
                            className={styles.add}
                            onClick={() => {
                                append(defaultFieldObject);
                            }}
                        >{appendText}</button>
                    )}
                </div>

            </div>

        </div>
    );

};


export default FieldArray;
