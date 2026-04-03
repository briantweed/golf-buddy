import styles from "./styles.module.scss";
import useStyling from "@libraries/FormBuilder/hooks/useStyling";


const Button = (props) => {

    const {
        children,
        styling,
        ...rest
    } = props;


    const className = useStyling(styles, styling);


    return (
        <button type={"button"} className={className} {...rest}>{children}</button>
    );

};


export default Button;