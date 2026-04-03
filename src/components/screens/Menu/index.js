import Headings from "./Headings";
import AccordionWidget from "@components/widgets/AccordionWidget";
import Leaderboard from "./Leaderboard";
import Course from "./Course";
import Players from "./Players";
import Scorecard from "./Scorecard";
import DangerZone from "./DangerZone";


const Menu = () => {

    const tabs =  [
        {
            "label": "Leaderboard",
            "content": <Leaderboard/>
        },
        {
            "label": "Course",
            "content": <Course/>
        },
        {
            "label": "Players",
            "content": <Players/>
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
        <section className="landscape:hidden bg-darkerGreen">

            <Headings/>

            <AccordionWidget
                id={"menu"}
                tabs={tabs}
            />

        </section>
    );

};


export default Menu;