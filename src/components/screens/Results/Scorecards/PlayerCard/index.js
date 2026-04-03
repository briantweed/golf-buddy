import {ROUND_TYPE} from "@files/config";
import Row from "./Row";
import courses from "@files/config/courses";


const PlayerCard = (props) => {

    const {id, settings} = props;

    const isFullRound = settings.RoundLength === ROUND_TYPE.FULL;

    const FrontNineScores = settings.Players[id].Scores?.slice(0, 9) || [];
    const BackNineScores = settings.Players[id].Scores?.slice(9, 18) || [];

    const holes = courses.find((course) => course.value === settings.CourseName).Holes;

    const FrontNineTotalScore = FrontNineScores.reduce((sum, item) => sum + item.Stroke, 0);
    const BackNineTotalScore = BackNineScores.reduce((sum, item) => sum + item.Stroke, 0);
    const PlayerTotalScore = FrontNineTotalScore + (isFullRound ? BackNineTotalScore : 0);


    return (
        <div className={"flex flex-col gap-2 justify-center items-start pb-4 mt-6"}>

            <Row
                type={"Out"}
                scores={FrontNineScores}
                totalScore={FrontNineTotalScore}
                holes={holes.slice(0,9)}
            />

            {settings.RoundLength === ROUND_TYPE.FULL && (
                <Row
                    type={"In"}
                    scores={BackNineScores}
                    totalScore={BackNineTotalScore}
                    holes={holes.slice(9,18)}
                />
            )}

            <div className="flex justify-end w-full pr-8 mt-2 text-base"><span
                className="mr-2">Total Score : </span><span className="font-semibold">{PlayerTotalScore}</span>
            </div>

        </div>
    );

};


export default PlayerCard;