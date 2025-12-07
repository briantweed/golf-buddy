import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";


const Paragraph = ({children, styling, ...rest}) => {

    const className = useStyling(styles, styling);

    return (
        <p
            className={className}
            {...rest}
        >{ children }</p>
    );

};


export default Paragraph;
