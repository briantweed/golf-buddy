import Navigation from "./Navigation";
import Scorecards from "./Scorecards";


const Results = () => {

    return (
        <section className="portrait:hidden min-h-screen flex flex-col justify-between max-h-screen">
            
            <Navigation/>

            <Scorecards/>

        </section>
    );

};

export default Results;