import {Switch} from "@base-ui-components/react/switch";
import styles from "./styles.module.scss";


const ToggleSwitch = (props) => {

    const {
        id,
        isActive,
        handleChange
    } = props;


    return (
        <Switch.Root
            id={id}
            checked={isActive}
            className={styles.contents}
            onCheckedChange={handleChange}
        >
            <Switch.Thumb className={styles.thumb} />
        </Switch.Root>
    );

};


export default ToggleSwitch;