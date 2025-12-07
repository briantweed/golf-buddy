import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";


const HeaderThree = ({children, styling, ...rest}) => {

    const classNames = useStyling(styles, styling);

    return (
        <h3
            className={classNames}
            {...rest}
        >{ children }</h3>
    );

};


export default HeaderThree;
