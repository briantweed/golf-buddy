import styles from "./styles.module.scss";
import testGame from "@files/config/test-game";
import {Fragment} from "react";

const Leaderboard = () => {

    const players = testGame.Players;


    function rankGolfScores(players, par = 72) {
        return players
            .map((player) => {
                const total = player.Scores.reduce((sum, hole) => sum + hole.Stroke, 0);
                const diff = total - par;

                let relativeToPar;
                if (diff === 0) {
                    relativeToPar = "E";
                } else if (diff > 0) {
                    relativeToPar = `+${diff}`;
                } else {
                    relativeToPar = `${diff}`;
                }

                return {
                    Name: player.Name,
                    Handicap: player.Handicap,
                    Total: total,
                    RelativeToPar: relativeToPar
                };
            })
            .sort((a, b) => {
                const parse = (val) => (val === "E" ? 0 : parseInt(val));
                return parse(a.RelativeToPar) - parse(b.RelativeToPar);
            });
    }

    const leaderboardResults = rankGolfScores(players);
    console.log(leaderboardResults);

    return (
        <div className={styles.contents}>
            <div className={styles.heading}>
                <div>#</div>
                <div>Name</div>
                <div className={"text-center"}>Total</div>
                <div className={"text-right"}>Score</div>
            </div>
            <div className={styles.standings}>
                {leaderboardResults.map((player, index) => {
                    return (
                        <Fragment key={index}>
                            <div><i>{index+1}</i></div>
                            <div>{player.Name}</div>
                            <div className={styles.total}>{player.Total}</div>
                            <div className={styles.par}><div>{player.RelativeToPar}</div></div>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );

};


export default Leaderboard;