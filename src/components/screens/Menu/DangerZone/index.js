import styles from "./styles.module.scss";

import Button from "@components/general/Button";


const DangerZone = () => {

    return (
        <div className={styles.contents}>

            <Button onClick={() => window.location.reload()} styling={{variant: "warning"}}><span className="text-xs">&#10227;</span>Reload App</Button>

            <Button styling={{variant: "danger"}}><span className="text-xs">x</span>Clear Player Scores</Button>

            <Button styling={{variant: "danger"}}><span className="text-xs">x</span>Remove All Players</Button>

            <Button styling={{variant: "danger"}}><span className="text-xs">x</span>Full Reset</Button>

        </div>
    );

};


export default DangerZone;