import TabWidget from "@components/widgets/TabWidget";
import testGame, {ROUND_TYPE} from "@files/config/test-game";


const Results = () => {

    const courseParScore = testGame.Holes.reduce((sum, item) => sum + item.Par, 0);

    const courseTotalYards = testGame.Holes.reduce((sum, item) => sum + item.Yards, 0);

    const tabs = testGame.Players.map((Player, index) => {
        return {
            "label": Player.Name,
            "content": <ScoreCard key={index} id={index}/>
        };
    });

    return (
        <div className="portrait:hidden min-h-screen flex flex-col justify-between">
            <section className={"flex justify-between px-4 pt-4"}>
                <h1 className={"text-2xl font-medium"}>{testGame.CourseName}</h1>
                <div className="flex justify-end gap-6 pr-4">
                    <h2 className={"text-base mt-1"}>
                        Holes: {testGame.RoundType}
                    </h2>
                    <span className="text-darkGreen">|</span>
                    <h2 className={"text-base mt-1"}>
                        <i>Par: <span className={"ml-2"}>{courseParScore}</span></i>
                    </h2>
                    <span className="text-darkGreen">|</span>
                    <h2 className={"text-base mt-1"}><i>Yards:<span className={"ml-2"}> {courseTotalYards}</span></i>
                    </h2>
                </div>
            </section>

            <section className={"px-4"}>
                <TabWidget tabs={tabs}/>
            </section>
        </div>
    );

};


const ScoreCard = (props) => {

    const {id} = props;

    const isFullRound = testGame.RoundType === ROUND_TYPE.FULL;

    const FrontNine = testGame.Players[id].Scores.slice(0, 9);
    const BackNine = testGame.Players[id].Scores.slice(9, 18);


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
                const parValue = testGame.Holes[index].Par;
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