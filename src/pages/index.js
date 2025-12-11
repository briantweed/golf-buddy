import testGame, {ROUND_TYPE} from "@files/config/test-game";
import TabWidget from "@components/widgets/TabWidget";
import form from "@files/forms/setup";
import validationRules from "@files/validation/setup.zod";
import useFormBuilder from "@libraries/FormBuilder/useFormBuilder";
import AccordionWidget from "@components/widgets/AccordionWidget";
import Leaderboard from "@components/Leaderboard";


const Page = () => {

    const handleSubmit = (data) => {
        console.log(data);
    };

    const renderedForm = useFormBuilder(form, validationRules, handleSubmit, {
        defaultValues: testGame
    });

    const tabs = testGame.Players.map((Player, index) => {
        return {
            "label": Player.Name,
            "content": <ScoreCard key={index} id={index}/>
        };
    });


    const courseParScore = testGame.Holes.reduce((sum, item) => sum + item.Par, 0);
    const courseTotalYards = testGame.Holes.reduce((sum, item) => sum + item.Yards, 0);

    return (
        <main className={"min-h-screen w-screen text-xl text-grey-6 bg-grey-7"}>

            <div className="portrait:hidden min-h-screen flex flex-col justify-between">
                <section className={"flex justify-between px-4 pt-4"}>
                    <h1 className={"text-2xl font-medium"}>{testGame.CourseName} </h1>
                    <div className="flex justify-end gap-6 pr-4">
                        <h2 className={"text-base mt-1"}>
                            Holes: {testGame.RoundType}
                        </h2>
                        <span className="text-darkGreen">|</span>
                        <h2 className={"text-base mt-1"}>
                            <i>Par: <span className={"ml-2"}>{courseParScore}</span></i>
                        </h2>
                        <span className="text-darkGreen">|</span>
                        <h2 className={"text-base mt-1"}><i>Yards:<span className={"ml-2"}> {courseTotalYards}</span></i></h2>
                    </div>
                </section>

                <section className={"px-4"}>
                    <TabWidget tabs={tabs}/>
                </section>
            </div>

            <div className="landscape:hidden">
                <h1 className={"text-4xl font-semibold pt-4 pb-2 text-center"}>Golf Buddy</h1>
                <h2 className={"text-2xl italic pt-0 text-center"}>ScoreCard</h2>
                <AccordionWidget
                    id={"setup"}
                    defaultValue={["setup_0"]}
                    tabs={[
                        {
                            "label": "Leaderboard",
                            "content": (
                                <Leaderboard/>
                            )
                        },
                        {
                            "label": "Setup",
                            "content": <div>{renderedForm}</div>
                        },
                        {
                            "label": "Scorecard",
                            "content": (
                                <div className={"text-sm italic"}>rotate your phone</div>
                            )
                        },
                        {
                            "label": "Danger Zone",
                            "content": <div className={"flex flex-col items-start gap-4"}>
                                <button type="button" className={"bg-red-2 p-2 px-4 pr-5 text-sm rounded-xl flex items-center gap-3"}><span className="text-xs">x</span> Clear Player Scores</button>
                                <button type="button" className={"bg-red-2 p-2 px-4 pr-5 text-sm rounded-xl flex items-center gap-3"}><span className="text-xs">x</span> Remove All Players</button>
                                <button type="button" className={"bg-red-2 p-2 px-4 pr-5 text-sm rounded-xl flex items-center gap-3"}><span className="text-xs">x</span> Full Reset</button>
                            </div>
                        }
                    ]}
                />

            </div>

        </main>
    );

};


const ScoreCard = (props) => {

    const {id} = props;

    const isFullRound = testGame.RoundType === ROUND_TYPE.FULL;

    const FrontNine = testGame.Players[id].Scores.slice(0, 9);
    const BackNine = testGame.Players[id].Scores.slice(9, 18);

    const FrontNineScore = FrontNine.reduce((sum, item) => sum + item.Stroke, 0);
    const BackNineScore = BackNine.reduce((sum, item) => sum + item.Stroke, 0);
    const TotalPlayerScore = FrontNineScore + (isFullRound ? BackNineScore : 0);

    return (
        <div>

            <section className={"flex flex-col gap-2 justify-center items-start pb-4 mt-6"}>
                <div className={"grid grid-cols-10 gap-2"}>
                    {FrontNine.map((score, index) => {
                        const parValue = testGame.Holes[index].Par;
                        const strokeValue = score.Stroke;
                        let bgColor = "bg-pastel-red-2";
                        switch (parValue - strokeValue) {
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
                        <div className={"text-center font-semibold bg-blue py-1 rounded-t-lg"}>Out</div>
                        <div className={"flex"}>
                            <div
                                className={"py-1 bg-grey-2 text-black font-semibold text-xl rounded-bl-lg rounded-br-lg w-28 flex items-center justify-center text-center"}>{FrontNineScore}</div>
                        </div>
                    </div>

                </div>

                {isFullRound && (
                    <div className={"grid grid-cols-10 gap-2"}>
                        {BackNine.map((score, index) => {
                            const parValue = testGame.Holes[index].Par;
                            const strokeValue = score.Stroke;
                            let bgColor = "bg-pastel-red-2";
                            switch (parValue - strokeValue) {
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

                            return (
                                <div key={index}>
                                    <div
                                        className={"text-center font-semibold bg-lightBlue py-1 rounded-t-lg"}>{index + 10}</div>
                                    <div className={"grid grid-cols-2 grow"}>
                                        <div
                                            className={"py-1 bg-grey-1 rounded-bl-lg  flex items-center justify-center text-center"}>{parValue}</div>
                                        <div
                                            className={`py-1 ${bgColor} rounded-br-lg text-black flex items-center justify-center text-center`}>{strokeValue}</div>
                                    </div>
                                </div>
                            );
                        })}

                        <div>
                            <div className={"text-center font-semibold bg-blue py-1 rounded-t-lg"}>In</div>
                            <div className={"flex"}>
                                <div
                                    className={"py-1 bg-grey-2 text-black font-semibold text-xl rounded-bl-lg rounded-br-lg w-28 flex items-center justify-center text-center"}>{BackNineScore}</div>
                            </div>
                        </div>

                    </div>
                )}

                <div className="flex justify-end w-full pr-8 mt-2 text-base"><span
                    className="mr-4">Total Score : </span><span className="font-semibold">{TotalPlayerScore}</span>
                </div>
            </section>
        </div>
    );

};

export default Page;
