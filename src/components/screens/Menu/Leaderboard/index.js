import styles from "./styles.module.scss";
import testGame from "@files/config/test-game";
import {Fragment} from "react";

const Leaderboard = () => {

    const players = testGame.Players;


    function calculateLeaderboardData(players, par = 72) {
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
                    Scores: player.Scores.map((hole) => hole.Stroke),
                    Total: total,
                    RelativeToPar: relativeToPar
                };
            })
            .sort((a, b) => {
                const parse = (val) => (val === "E" ? 0 : parseInt(val));
                return parse(a.RelativeToPar) - parse(b.RelativeToPar);
            });
    }

    const leaderboardData = calculateLeaderboardData(players);


    return (
        <div className={styles.contents}>
            <div className={styles.heading}>
                <div>#</div>
                <div>Name</div>
                <div className={"text-center"}>Total</div>
                <div className={"text-right pr-1"}>Score</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
            </div>
            <div className={styles.standings}>
                {leaderboardData.map((player, index) => {
                    return (
                        <Fragment key={index}>
                            <div><i>{index+1}</i></div>
                            <div className={"font-semibold"}>{player.Name}</div>
                            <div className={styles.total}>{player.Total}</div>
                            <div className={styles.par}><div>{player.RelativeToPar}</div></div>
                            {player.Scores.map((score, index) => {
                                return <div key={index}>{score}</div>;
                            })}
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );

};


export default Leaderboard;