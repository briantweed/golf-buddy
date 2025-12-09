import testGame, {ROUND_TYPE} from "@files/config/test-game";
import TabWidget from "@components/widgets/TabWidget";
import ToggleSwitch from "@components/ToggleSwitch";
import {useState} from "react";


const Page = () => {

    const [roundLength, setRoundLength] = useState(testGame.RoundType);

    const handleChange = () => {
        setRoundLength((roundLength) => roundLength === ROUND_TYPE.FULL ? ROUND_TYPE.HALF : ROUND_TYPE.FULL );
    };


    const tabs = testGame.Players.map((Player, index) => {
        return {
            "label": Player.Name,
            "content": <ScoreCard key={index} id={index} roundLength={roundLength}/>
        };
    });


    const courseParScore = testGame.Holes.reduce((sum, item) => sum + item.Par, 0);
    const courseTotalYards = testGame.Holes.reduce((sum, item) => sum + item.Yards, 0);

    return (
        <main className={"text-2xl text-grey-6 bg-grey-7 h-screen w-screen overflow-hidden"}>

            <section className={"pt-12 pb-8 px-16"}>
                <h1 className={"text-4xl mb-2"}>{testGame.CourseName} </h1>
                <h2 className={"text-base"}>
                    <i>Par: {courseParScore}</i>
                    <br/>
                    <i>Total Yards: {courseTotalYards}</i>
                </h2>
                <div className="flex gap-2 text-base mt-4">
                    <span>Number of Holes: </span>
                    <span>9</span>
                    <ToggleSwitch
                        id={"NumberOfHoles"}
                        isActive={roundLength === ROUND_TYPE.FULL}
                        handleChange={handleChange}
                    />
                    <span>18</span>
                </div>
            </section>

            <section className={"px-16"}>
                <TabWidget tabs={tabs}/>
            </section>

        </main>
    );

};


const ScoreCard = (props) => {

    const {
        id,
        roundLength
    } = props;

    const isFullRound = roundLength === ROUND_TYPE.FULL;

    const FrontNine = testGame.Players[id].Scores.slice(0, 9);
    const BackNine = testGame.Players[id].Scores.slice(9, 18);

    const FrontNineScore = FrontNine.reduce((sum, item) => sum + item.Stroke, 0);
    const BackNineScore = BackNine.reduce((sum, item) => sum + item.Stroke, 0);
    const TotalPlayerScore = FrontNineScore + (isFullRound ? BackNineScore : 0);

    return (
        <section className={"flex flex-col gap-2 justify-center items-start pt-8 pb-2.5"}>
            <div className={"flex gap-2"}>
                {FrontNine.map((score, index) => {
                    const parValue = testGame.Holes[index].Par;
                    const strokeValue = score.Stroke;
                    let bgColor = "bg-pastel-red-2";
                    switch (parValue - strokeValue) {
                        case -2: bgColor = "bg-pastel-red-2"; break;
                        case -1: bgColor = "bg-pastel-red-1"; break;
                        case 0: bgColor = "bg-grey-2"; break;
                        case 1: bgColor = "bg-pastel-green-1"; break;
                        case 2: bgColor = "bg-pastel-green-2"; break;
                        case 3: bgColor = "bg-pastel-green-2"; break;
                        case 4: bgColor = "bg-pastel-green-2"; break;
                    }

                    return (
                        <div key={index}>
                            <div className={"text-center font-semibold bg-lightBlue p-2 rounded-t-lg"}>{index + 1}</div>
                            <div className={"flex"}>
                                <div className={"p-2 bg-grey-1 rounded-bl-lg w-16 h-16 flex items-center justify-center text-center"}>{parValue}</div>
                                <div className={`p-2 ${bgColor} rounded-br-lg text-black w-16 h-16 flex items-center justify-center text-center`}>{strokeValue}</div>
                            </div>
                        </div>
                    );
                })}

                <div>
                    <div className={"text-center font-semibold bg-blue p-2 rounded-t-lg"}>Out</div>
                    <div className={"flex"}>
                        <div className={"p-2 bg-grey-2 text-black font-semibold text-2xl rounded-bl-lg rounded-br-lg w-28 h-16 flex items-center justify-center text-center"}>{FrontNineScore}</div>
                    </div>
                </div>

            </div>

            {isFullRound && (
                <div className={"flex gap-2"}>
                    {BackNine.map((score, index) => {
                        const parValue = testGame.Holes[index].Par;
                        const strokeValue = score.Stroke;
                        let bgColor = "bg-pastel-red-2";
                        switch (parValue - strokeValue) {
                            case -2: bgColor = "bg-pastel-red-2"; break;
                            case -1: bgColor = "bg-pastel-red-1"; break;
                            case 0: bgColor = "bg-grey-2"; break;
                            case 1: bgColor = "bg-pastel-green-1"; break;
                            case 2: bgColor = "bg-pastel-green-2"; break;
                            case 3: bgColor = "bg-pastel-green-2"; break;
                            case 4: bgColor = "bg-pastel-green-2"; break;
                        }

                        return (
                            <div key={index}>
                                <div className={"text-center font-semibold bg-lightBlue p-2 rounded-t-lg"}>{index + 10}</div>
                                <div className={"flex"}>
                                    <div className={"p-2 bg-grey-1 rounded-bl-lg w-16 h-16 flex items-center justify-center text-center"}>{parValue}</div>
                                    <div className={`p-2 ${bgColor} rounded-br-lg text-black w-16 h-16 flex items-center justify-center text-center`}>{strokeValue}</div>
                                </div>
                            </div>
                        );
                    })}

                    <div>
                        <div className={"text-center font-semibold bg-blue p-2 rounded-t-lg"}>In</div>
                        <div className={"flex"}>
                            <div className={"p-2 bg-grey-2 text-black font-semibold text-2xl rounded-bl-lg rounded-br-lg w-28 h-16 flex items-center justify-center text-center"}>{BackNineScore}</div>
                        </div>
                    </div>

                </div>
            )}

            <div className="flex justify-end w-full px-[118px] mt-4 text-2xl italic"><span className="mr-4">Total Score : </span><span className="font-semibold">{TotalPlayerScore}</span></div>
        </section>
    );

};

export default Page;