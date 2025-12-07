import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";


const Button = ({children, handleClick, styling, ...rest}) => {

    const className = useStyling(styles, styling);

    return (
        <button
            type={"button"}
            className={className}
            onClick={handleClick}
            {...rest}
        >{ children }</button>
    );

};


export default Button;