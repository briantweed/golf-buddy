import {useFieldArray} from "react-hook-form";
import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";

import Legend from "../../layout/Legend";
import ErrorMessage from "../../layout/ErrorMessage";


const NestedForm = (props) => {

    const {
        config: {
            id,
            legend,
            subfields,
            appendText
        },
        control,
        error
    } = props;

    const {append} = useFieldArray({
        control,
        name: id,
        shouldUnregister: true
    });

    // const {shouldDisplaySubField} = useFieldArrayHelper();

    const defaultFieldObject = subfields.reduce((acc, field) => {
        acc[field.id] = "";
        return acc;
    }, {});


    const className = useStyling(styles);


    const {content, ...rest} = legend;

    return (
        <div className={className}>
            <Legend
                id={id}
                {...rest}
            >{content}</Legend>

            <button
                type="button"
                onClick={() => {
                    append(defaultFieldObject);
                }}
            >{appendText}</button>

            {error?.message && (
                <li data-error={id}>
                    <ErrorMessage>{error.message}</ErrorMessage>
                </li>
            )}

        </div>
    );

};


export default NestedForm;
