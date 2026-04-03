import {Fragment} from "react";
import useLocalStorage from "@hooks/useLocalStorage";
import styles from "./styles.module.scss";


const Leaderboard = () => {

    const {settings} = useLocalStorage();

    if (settings) {

        const players = settings.Players;
        const numberOfHoles = [...Array(Number(settings.RoundLength)).keys()].map((x) => ++x) || [];


        const calculateLeaderboardData = (players, par = 72) => {

            const EVEN = "E";

            return players.map((player) => {
                const total = player.Scores?.reduce((sum, hole) => sum + hole.Stroke, 0) || 0;
                const diff = total - par;

                let relativeToPar = diff;

                if (diff === 0) {
                    relativeToPar = EVEN;
                } else if (diff > 0) {
                    relativeToPar = `+${diff}`;
                }

                return {
                    Name: player.Name,
                    Scores: player.Scores?.map((hole) => hole.Stroke),
                    Total: total,
                    RelativeToPar: relativeToPar
                };
            }).sort((a, b) => {
                const parse = (val) => (val === EVEN ? 0 : parseInt(val));
                return parse(a.RelativeToPar) - parse(b.RelativeToPar);
            });
        };


        const leaderboardData = calculateLeaderboardData(players);


        return (
            <div className={`${styles.contents} ${styles["grid" + settings.RoundLength]}`}>
                <div className={styles.heading}>
                    <div>#</div>
                    <div className={"text-left"}>Name</div>
                    <div className={"text-center"}>Score</div>
                    {numberOfHoles.map((hole, index) => (
                        <div key={index}>{hole}</div>
                    ))}
                    <div className={"text-center"}>Total</div>
                </div>
                <div className={styles.standings}>
                    {leaderboardData.map((player, index) => {
                        return (
                            <Fragment key={index}>
                                <div><i>{index + 1}</i></div>
                                <div className={"text-left font-semibold"}>{player.Name}</div>
                                <div className={styles.par}>
                                    <div>{player.RelativeToPar}</div>
                                </div>
                                {numberOfHoles.map((hole) => {
                                    return <div key={hole}>{player.Scores ? player.Scores[index] : 0}</div>;
                                })}
                                <div className={styles.total}>{player.Total}</div>
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        );
    }

    return null;

};


export default Leaderboard;