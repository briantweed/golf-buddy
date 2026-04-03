import styles from "./styles.module.scss";


const Scorecard = () => {

    return (
        <div className={styles.contents}>
            <img
                className={"animate-[spin_3s_ease-in-out_infinite]"}
                width={24}
                height={24}
                src={"rotate.svg"}
                alt=""
                aria-hidden="true"
            />rotate your phone
        </div>
    );

};

export default Scorecard;