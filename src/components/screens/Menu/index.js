import AccordionWidget from "@components/widgets/AccordionWidget";
import Leaderboard from "./Leaderboard";
import Scorecard from "./Scorecard";
import Settings from "./Settings";
import DangerZone from "./DangerZone";


const Menu = () => {

    return (
        <div className="landscape:hidden">

            <h1 className={"text-4xl font-semibold pt-4 pb-2 text-center"}>{process.env.TITLE}</h1>

            <h2 className={"text-2xl italic pt-0 text-center"}>{process.env.SUBTITLE}</h2>

            <AccordionWidget
                id={"setup"}
                tabs={[
                    {
                        "label": "Leaderboard",
                        "content": <Leaderboard/>

                    },
                    {
                        "label": "Setup",
                        "content": <Settings/>
                    },
                    {
                        "label": "Scorecard",
                        "content": <Scorecard/>
                    },
                    {
                        "label": "Danger Zone",
                        "content": <DangerZone/>
                    }
                ]}
            />

        </div>
    );

};


export default Menu;