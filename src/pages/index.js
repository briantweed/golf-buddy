import testGame, {ROUND_TYPE} from "@files/config/test-game";
import TabWidget from "@components/widgets/TabWidget";


const Page = () => {


    const tabs = testGame.Players.map((Player, index) => {
        return {
            "label": Player.Name,
            "content": <ScoreCard key={index} id={index}/>
        };
    });

    return (
        <main className={"text-2xl text-grey-6 bg-grey-7 h-screen w-screen overflow-hidden"}>

            <section className={"flex items-center justify-center py-8"}>
                <h1>{testGame.CourseName}</h1>
            </section>

            <section className={"flex items-center justify-center w-3/4 mx-auto"}>
                <TabWidget tabs={tabs}/>
            </section>

        </main>
    );

};


const ScoreCard = (props) => {

    const {id} = props;

    const FrontNine = testGame.Players[id].Scores.slice(0, 9);
    const BackNine = testGame.Players[id].Scores.slice(9, 18);

    return (
        <section className={"flex flex-col gap-2 justify-center items-center pt-8 pb-2.5"}>
            <div className={"flex gap-2"}>
                {FrontNine.map((score, index) => {
                    return (
                        <div key={index}>
                            <div
                                className={"text-center font-semibold bg-lightBlue p-2 rounded-t-lg"}>{index + 1}</div>
                            <div className={"flex"}>
                                <div
                                    className={"p-2 bg-grey-1 rounded-bl-lg w-16 h-16 flex items-center justify-center text-center"}>
                                    {testGame.Holes[index].Par}
                                </div>
                                <div
                                    className={"p-2 bg-grey-2 rounded-br-lg text-black w-16 h-16 flex items-center justify-center text-center"}>{score.Stroke}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {testGame.RoundType === ROUND_TYPE.FULL && (
                <div className={"flex gap-2"}>
                    {BackNine.map((score, index) => {
                        return (
                            <div key={index}>
                                <div className={"text-center font-semibold bg-lightBlue p-2 rounded-t-lg"}>{index + 1}</div>
                                <div className={"flex"}>
                                    <div
                                        className={"p-2 bg-grey-1 rounded-bl-lg w-16 h-16 flex items-center justify-center text-center"}>
                                        {testGame.Holes[index].Par}
                                    </div>
                                    <div className={"p-2 bg-grey-2 rounded-br-lg text-black w-16 h-16 flex items-center justify-center text-center"}>{score.Stroke}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );

};

export default Page;