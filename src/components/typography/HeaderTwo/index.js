import useStyling from "@hooks/useStyling";
import styles from "./styles.module.scss";


const HeaderTwo = (props) => {

    const {
        styling,
        children
    } = props;

    const className = useStyling(styles, styling);


    return (
        <h2 className={className}>{children}</h2>
    );

};


export default HeaderTwo;