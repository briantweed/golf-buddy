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
                    player={Player}
                />
            };
        });


        return (
            tabs.length > 0 ? (
                <div className={"px-4"}>
                    <TabWidget tabs={tabs}/>
                </div>
            ) : (
                <div className="h-screen flex justify-center items-center "><img
                    className="rounded-full overflow-hidden" src="/web-app-manifest-192x192.png" alt="golf buddy"/></div>
            )
        );

    }

    return null;

};


export default Scorecards;