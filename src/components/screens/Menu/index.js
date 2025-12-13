import testGame from "@files/config/test-game";
import form from "@files/forms/setup";
import validationRules from "@files/validation/setup.zod";
import useFormBuilder from "@libraries/FormBuilder/useFormBuilder";
import AccordionWidget from "@components/widgets/AccordionWidget";
import Leaderboard from "@components/screens/Menu/Leaderboard";


const Menu = () => {

    const handleSubmit = (data) => {
        console.log(data);
    };

    const renderedForm = useFormBuilder(form, validationRules, handleSubmit, {
        defaultValues: testGame
    });


    return (
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
    );

};


export default Menu;