import styles from "./styles.module.scss";


const Message = (props) => {

    const {
        children
    } = props;


    return (
        <div className={styles.contents}>{children}</div>
    );

};


export default Message;