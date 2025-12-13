import storedGameData from "@files/config/test-game";

import TabWidget from "@components/widgets/TabWidget";
import PlayerCard from "@components/screens/Results/PlayerCard";


const Scorecards = () => {

    const {Players} = storedGameData;

    const tabs = Players.map((Player, index) => {
        return {
            "label": Player.Name,
            "content": <PlayerCard key={index} id={index}/>
        };
    });


    return (
        <section className={"px-4"}>
            <TabWidget tabs={tabs}/>
        </section>
    );

};


export default Scorecards;