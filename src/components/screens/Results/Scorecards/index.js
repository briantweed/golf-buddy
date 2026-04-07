import useLocalStorage from "@hooks/useLocalStorage";

import TabWidget from "@components/widgets/TabWidget";
import PlayerCard from "./PlayerCard";


const Scorecards = () => {

    const storage = useLocalStorage();

    const {settings} = storage;

    if (settings) {

        const {Players = []} = settings;

        const tabs = Players.map((Player, index) => {
            return {
                "label": Player.Name,
                "content": <PlayerCard
                    id={index}
                    storage={storage}
                />
            };
        });


        return (
            <div className={"px-4"}>
                <TabWidget tabs={tabs}/>
            </div>
        );

    }

    return null;

};


export default Scorecards;