import {useMemo} from "react";
import storedGameData from "@files/config/test-game";


const Navigation = () => {
    
    const {
        CourseName,
        RoundType,
        Holes
    } = storedGameData;
    
    const courseParScore = useMemo(() => Holes.reduce((sum, item) => sum + item.Par, 0), [Holes]);

    const courseTotalYards = useMemo(() => Holes.reduce((sum, item) => sum + item.Yards, 0), [Holes]);
    
    
    return (
        <nav className={"flex justify-between px-4 pt-4"}>
            
            <h1 className={"text-2xl font-medium"}>{CourseName}</h1>
            
            <div className="flex justify-end gap-6 pr-4">
                
                <h2 className={"text-base mt-1"}>Holes: {RoundType}</h2>
                
                <span className="text-darkGreen">|</span>
                
                <h2 className={"text-base mt-1"}><i>Par:<span className={"ml-2"}>{courseParScore}</span></i></h2>
                
                <span className="text-darkGreen">|</span>
                
                <h2 className={"text-base mt-1"}><i>Total Yards:<span className={"ml-2"}> {courseTotalYards}</span></i></h2>
            
            </div>
            
        </nav>
    );
    
};


export default Navigation;