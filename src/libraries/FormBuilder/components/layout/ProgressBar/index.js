import styles from "./styles.module.scss";


const ProgressBar = (props) => {

    const {
        value,
        maxValue,
        showProgress=false,
        showLabel=false
    } = props;

    const progressBarWidth = Math.ceil(value/maxValue * 100);


    return (
        <div className={`${styles.contents}`}>

            {showProgress && <div>{value} / {maxValue}</div>}

            <div
                className={`${styles.bar}`}
                role="progressbar"
                aria-label="Form Progress"
                aria-valuenow={progressBarWidth}
            >
                <div
                    className={styles.progress}
                    style={{
                        width: `${progressBarWidth}%`,
                        backgroundColor: `hsl(215 ${progressBarWidth} ${progressBarWidth/3 + 30}%)`
                    }}
                >
                    {showLabel && <span>{progressBarWidth}%</span>}
                </div>
            </div>

        </div>
    );

};


export default ProgressBar;
