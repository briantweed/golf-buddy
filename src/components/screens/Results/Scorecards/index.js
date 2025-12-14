import storedGameData from "@files/config/test-game";

import TabWidget from "@components/widgets/TabWidget";
import PlayerCard from "./PlayerCard";


const Scorecards = () => {

    const {Players} = storedGameData;

    const tabs = Players.map((Player, index) => {
        return {
            "label": Player.Name,
            "content": <PlayerCard key={index} id={index}/>
        };
    });


    return (
        <div className={"px-4"}>
            <TabWidget
                tabs={tabs}
                handleChange={(d) => console.log(d)}
            />
        </div>
    );

};


export default Scorecards;