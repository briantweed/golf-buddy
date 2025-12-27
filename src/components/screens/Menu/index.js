import Headings from "./Headings";
import AccordionWidget from "@components/widgets/AccordionWidget";
import Leaderboard from "./Leaderboard";
import Scorecard from "./Scorecard";
import Settings from "./Settings";
import DangerZone from "./DangerZone";


const Menu = () => {

    const tabs =  [
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
    ];


    return (
        <section className="landscape:hidden">

            <Headings/>

            <AccordionWidget
                id={"menu"}
                tabs={tabs}
            />

        </section>
    );

};


export default Menu;