import storedGameData, {ROUND_TYPE} from "@files/config/test-game";
import Row from "./Row";


const PlayerCard = (props) => {

    const {id} = props;

    const isFullRound = storedGameData.RoundType === ROUND_TYPE.FULL;

    const FrontNine = storedGameData.Players[id].Scores.slice(0, 9);
    const BackNine = storedGameData.Players[id].Scores.slice(9, 18);


    const FrontNineScore = BackNine.reduce((sum, item) => sum + item.Stroke, 0);
    const BackNineScore = BackNine.reduce((sum, item) => sum + item.Stroke, 0);
    const TotalPlayerScore = FrontNineScore + (isFullRound ? BackNineScore : 0);


    return (
        <section className={"flex flex-col gap-2 justify-center items-start pb-4 mt-6"}>

            <Row
                type={"Out"}
                holes={FrontNine}
                score={FrontNineScore}
            />

            <Row
                type={"In"}
                holes={BackNine}
                score={BackNineScore}
            />

            <div className="flex justify-end w-full pr-8 mt-2 text-base"><span
                className="mr-4">Total Score : </span><span className="font-semibold">{TotalPlayerScore}</span>
            </div>

        </section>
    );

};


export default PlayerCard;