import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";


const HeaderTwo = ({children, styling, ...rest}) => {

    const className = useStyling(styles, styling);

    return (
        <h2
            className={className}
            {...rest}
        >{ children }</h2>
    );

};


export default HeaderTwo;
