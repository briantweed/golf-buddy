import {OVERLAY_ID} from "@files/config";
import styles from "./styles.module.scss";


const Overlay = () => {

    return (
        <div
            id={OVERLAY_ID}
            data-gsap={OVERLAY_ID}
            className={styles.contents}
        />
    );

};


export default Overlay;