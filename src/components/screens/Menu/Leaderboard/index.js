import {Fragment} from "react";
import useLocalStorage from "@hooks/useLocalStorage";
import styles from "./styles.module.scss";
import courses from "@files/config/courses";
import {ROUND_LENGTH} from "@files/config";


const Leaderboard = () => {

    const {settings} = useLocalStorage();

    if (settings) {

        const {
            Players = [],
            RoundLength = "9"
        } = settings;


        const calculateLeaderboardData = (players, holes = []) => {

            if (!players.length) {
                return [];
            }

            const EVEN = "E";

            return players.map((player) => {
                const holesPlayed = player.Scores?.reduce((sum, hole) => hole > 0 ? ++sum : sum, 0) || 0;
                const shotsForHolesPlayed = player.Scores?.slice(0, holesPlayed).reduce((sum, hole) => sum + hole, 0) || 0;
                const parForHolesPlayed = holes.slice(0, holesPlayed).reduce((sum, item) => sum + item, 0);
                const diff = shotsForHolesPlayed - parForHolesPlayed;

                let relativeToPar = diff;

                if (diff === 0) {
                    relativeToPar = EVEN;
                } else if (diff > 0) {
                    relativeToPar = `+${diff}`;
                }

                return {
                    Name: player.Name,
                    Scores: player.Scores,
                    Total: shotsForHolesPlayed,
                    RelativeToPar: relativeToPar
                };
            }).sort((a, b) => {
                const parse = (val) => (val === EVEN ? 0 : parseInt(val));
                return parse(a.RelativeToPar) - parse(b.RelativeToPar);
            });
        };


        const numberOfHoles = [...Array(Number(RoundLength)).keys()].map((x) => ++x) || [];

        const course = courses.find((course) => course.value === settings.CourseName) || {};

        const currentGameHoles = RoundLength === ROUND_LENGTH.FULL ? course.Holes : course?.Holes?.slice(0,9);

        const leaderboardData = calculateLeaderboardData(Players, currentGameHoles);


        return (
            <div className={`${styles.contents} ${styles["grid" + RoundLength]}`}>
                {leaderboardData.length !== 0 ? (
                    <div className={styles.contentsContainer}>
                        <div>
                            <div className={styles.staticHeading}>
                                <div>#</div>
                                <div className={"text-left"}>Name</div>
                                <div className={"text-center"}>Score</div>
                            </div>
                            <div className={styles.staticStandings}>
                                {leaderboardData.map((player, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <div><i>{index + 1}</i></div>
                                            <div className={"text-left font-semibold"}>{player.Name}</div>
                                            <div className={styles.par}>
                                                <div>{player.RelativeToPar}</div>
                                            </div>
                                        </Fragment>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={"overflow-auto"}>
                            <div className={styles.heading}>
                                {numberOfHoles.map((hole, index) => (
                                    <div key={index}>{hole}</div>
                                ))}
                                <div className={"text-center"}>Total</div>
                            </div>
                            <div className={styles.standings}>
                                {leaderboardData.map((player, playerIndex) => {
                                    return (
                                        <Fragment key={playerIndex}>
                                            {numberOfHoles.map((hole, holeIndex) => {
                                                return <div key={hole}>{player.Scores ? String(player.Scores[holeIndex]) : 0}</div>;
                                            })}
                                            <div className={styles.total}>{player.Total}</div>
                                        </Fragment>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>No players added</p>
                )}
            </div>
        );
    }

    return <div className={styles.contents}>No players added</div>;

};


export default Leaderboard;