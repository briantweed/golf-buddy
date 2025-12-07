import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";


const HeaderOne = ({children, styling, ...rest}) => {

    const className = useStyling(styles, styling);

    return (
        <h1
            className={className}
            {...rest}
        >{ children }</h1>
    );

};


export default HeaderOne;
