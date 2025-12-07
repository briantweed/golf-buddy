import dynamic from "next/dynamic";
import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";

const Required = dynamic(() => import("../../layout/Required"));


const Legend = ({required, styling, children, ...rest}) => {

    const className = useStyling(styles, styling);


    return (
        <legend
            className={className}
            {...rest}
        >{ children } {required && <Required/>}</legend>
    );

};


export default Legend;
