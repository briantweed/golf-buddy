import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";

import Required from "../../layout/Required";


const Label = ({id, innerRef, required, styling, children, ...rest}) => {

    const className = useStyling(styles, styling);

    return (
        <label
            ref={innerRef}
            htmlFor={id}
            className={className}
            {...rest}
        >{ children } {required && <Required/>}</label>
    );

};


export default Label;
