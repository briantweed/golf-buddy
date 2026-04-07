import {ROUND_LENGTH} from "@files/config";
import courses from "@files/config/courses";

import Row from "./Row";


const PlayerCard = (props) => {

    const {
        id,
        storage,
        player
    } = props;

    const {
        settings,
        updatePlayerScore
    } = storage;

    const isFullRound = settings.RoundLength === ROUND_LENGTH.FULL;
    const FrontNineScores = player.Scores?.slice(0, 9) || [];
    const BackNineScores = player.Scores?.slice(9, 18) || [];

    const course = courses.find((course) => course.value === settings.CourseName) || {};
    const {Holes = []} = course;

    const FrontNineTotalScore = FrontNineScores.reduce((sum, item) => sum + item, 0);
    const BackNineTotalScore = BackNineScores.reduce((sum, item) => sum + item, 0);
    const PlayerTotalScore = FrontNineTotalScore + (isFullRound ? BackNineTotalScore : 0);


    return (
        <div className={"flex flex-col gap-2 justify-center items-start pb-4 mt-6"}>

            <Row
                id={id}
                player={player}
                settings={settings}
                type={"Out"}
                scores={FrontNineScores}
                totalScore={FrontNineTotalScore}
                holes={Holes.slice(0,9)}
                updatePlayerScore={updatePlayerScore}
            />

            {settings.RoundLength === ROUND_LENGTH.FULL && (
                <Row
                    id={id}
                    player={player}
                    settings={settings}
                    type={"In"}
                    scores={BackNineScores}
                    totalScore={BackNineTotalScore}
                    holes={Holes.slice(9,18)}
                    updatePlayerScore={updatePlayerScore}
                />
            )}

            <div className="flex justify-end w-full mt-2 text-base"><span
                className="mr-4">Total Score : </span><span className="font-semibold">{PlayerTotalScore}</span>
            </div>

        </div>
    );

};


export default PlayerCard;