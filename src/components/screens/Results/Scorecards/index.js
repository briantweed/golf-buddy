import TabWidget from "@components/widgets/TabWidget";
import PlayerCard from "./PlayerCard";
import useLocalStorage from "@hooks/useLocalStorage";


const Scorecards = () => {

    const {settings} = useLocalStorage();

    if (settings) {

        const {Players = []} = settings;


        const tabs = Players.map((Player, index) => {
            return {
                "label": Player.Name,
                "content": <PlayerCard key={index} id={index}/>
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