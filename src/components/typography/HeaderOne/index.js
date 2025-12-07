import useStyling from "@hooks/useStyling";
import styles from "./styles.module.scss";


const HeaderOne = (props) => {

    const {
        styling,
        children
    } = props;

    const className = useStyling(styles, styling);


    return (
        <h1 className={className}>{children}</h1>
    );

};


export default HeaderOne;