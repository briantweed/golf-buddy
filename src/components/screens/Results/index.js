import Navigation from "./Navigation";
import Scorecards from "./Scorecards";


const Results = () => {

    return (
        <div className="portrait:hidden min-h-screen flex flex-col gap-16">
            
            <Navigation/>

            <Scorecards/>

        </div>
    );

};

export default Results;