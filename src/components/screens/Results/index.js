import TabWidget from "@components/widgets/TabWidget";
import storedGameData, {ROUND_TYPE} from "@files/config/test-game";
import Navigation from "./Navigation";


const Results = () => {
    
    const tabs = storedGameData.Players.map((Player, index) => {
        return {
            "label": Player.Name,
            "content": <ScoreCard key={index} id={index}/>
        };
    });

    
    return (
        <div className="portrait:hidden min-h-screen flex flex-col justify-between">
            
            <Navigation/>

            <section className={"px-4"}>
                <TabWidget tabs={tabs}/>
            </section>
        </div>
    );

};


const ScoreCard = (props) => {

    const {id} = props;

    const isFullRound = storedGameData.RoundType === ROUND_TYPE.FULL;

    const FrontNine = storedGameData.Players[id].Scores.slice(0, 9);
    const BackNine = storedGameData.Players[id].Scores.slice(9, 18);


    const FrontNineScore = BackNine.reduce((sum, item) => sum + item.Stroke, 0);
    const BackNineScore = BackNine.reduce((sum, item) => sum + item.Stroke, 0);
    const TotalPlayerScore = FrontNineScore + (isFullRound ? BackNineScore : 0);


    return (
        <section className={"flex flex-col gap-2 justify-center items-start pb-4 mt-6"}>

            <Direction
                type={"Out"}
                holes={FrontNine}
                score={FrontNineScore}
            />

            <Direction
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


const Direction = (props) => {

    const {
        type,
        holes,
        score
    } = props;


    const getBgColor = (score) => {
        let bgColor = "bg-pastel-red-2";

        switch (score) {
            case -2:
                bgColor = "bg-pastel-red-2";
                break;
            case -1:
                bgColor = "bg-pastel-red-1";
                break;
            case 0:
                bgColor = "bg-grey-2";
                break;
            case 1:
                bgColor = "bg-pastel-green-1";
                break;
            case 2:
                bgColor = "bg-pastel-green-2";
                break;
            case 3:
                bgColor = "bg-pastel-green-2";
                break;
            case 4:
                bgColor = "bg-pastel-green-2";
                break;
        }

        return bgColor;
    };


    return (
        <div className={"grid grid-cols-10 gap-2"}>
            {holes.map((score, index) => {
                const parValue = storedGameData.Holes[index].Par;
                const strokeValue = score.Stroke;
                const bgColor = getBgColor(parValue - strokeValue);
                return (
                    <div key={index}>
                        <div
                            className={"text-center font-semibold bg-lightBlue py-1 rounded-t-lg"}>{index + 1}</div>
                        <div className={"grid grid-cols-2 grow"}>
                            <div
                                className={"py-1 bg-grey-1 rounded-bl-lg flex items-center justify-center text-center"}>{parValue}</div>
                            <div
                                className={`py-1 ${bgColor} rounded-br-lg text-black flex items-center justify-center text-center`}>{strokeValue}</div>
                        </div>
                    </div>
                );
            })}

            <div>
                <div className={"text-center font-semibold bg-blue py-1 rounded-t-lg"}>{type}</div>
                <div className={"flex"}>
                    <div
                        className={"py-1 bg-grey-2 text-black font-semibold text-xl rounded-bl-lg rounded-br-lg w-28 flex items-center justify-center text-center"}>{score}</div>
                </div>
            </div>

        </div>
    );

};


export default Results;