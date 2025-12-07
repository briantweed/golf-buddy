import useStyling from "@hooks/useStyling";
import styles from "./styles.module.scss";


const HeaderThree = (props) => {

    const {
        styling,
        children
    } = props;

    const className = useStyling(styles, styling);


    return (
        <h3 className={className}>{children}</h3>
    );

};


export default HeaderThree;