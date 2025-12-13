import Navigation from "./Navigation";
import Scorecards from "@components/screens/Results/Scorecards";


const Results = () => {

    return (
        <div className="portrait:hidden min-h-screen flex flex-col justify-between">
            
            <Navigation/>

            <Scorecards/>

        </div>
    );

};

export default Results;