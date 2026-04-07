import styles from "./styles.module.scss";

import Button from "@components/general/Button";
import useLocalStorage from "@hooks/useLocalStorage";
import Message from "@components/general/Message";
import {useEffect, useState} from "react";


const DangerZone = () => {

    const {
        resetEverything,
        resetPlayers,
        resetPlayerScores
    } = useLocalStorage();

    const [display, setDisplay] = useState(false);

    const handleFullReset = () => {
        resetEverything();
        setDisplay(true);
    };

    const handleScoreReset = () => {
        resetPlayerScores();
        setDisplay(true);
    };

    const handlePlayerReset = () => {
        resetPlayers();
        setDisplay(true);
    };


    useEffect(() => {
        if (display) {
            setTimeout(() => {
                setDisplay(false);
            }, 1000);
        }
    }, [display]);


    return (
        <div className={styles.contents}>

            <Button onClick={() => window.location.reload()} styling={{variant: "warning"}}><span className="text-xs">&#10227;</span>Reload App</Button>

            <Button onClick={handleScoreReset} styling={{variant: "danger"}}><span className="text-xs">x</span>Clear Player Scores</Button>

            <Button onClick={handlePlayerReset} styling={{variant: "danger"}}><span className="text-xs">x</span>Remove All Players</Button>

            <Button onClick={handleFullReset} styling={{variant: "danger"}}><span className="text-xs">x</span>Full Reset</Button>

            {display && (
                <Message><div className="text-darkGreen font-bold">&#10003;</div> updated</Message>
            )}

        </div>
    );

};


export default DangerZone;