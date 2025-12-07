import styles from "./styles.module.scss";


const Required = () => {

    return (
        <span className={styles.contents} aria-hidden={true}>*</span>
    );

};


export default Required;
