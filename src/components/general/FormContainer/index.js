import styles from "./styles.module.scss";


const FormContainer = (props) => {

    const {
        children
    } = props;


    return (
        <div className={styles.contents}>{children}</div>
    );

};


export default FormContainer;