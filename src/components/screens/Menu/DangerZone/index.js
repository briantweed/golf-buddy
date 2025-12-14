const DangerZone = () => {

    return (
        <div className={"flex flex-col items-start gap-4"}>
            <button
                type="button"
                onClick={() => window.location.reload()}
                className={"bg-darkYellow p-2 px-4 pr-5 text-sm rounded-xl flex items-center gap-2"}
            ><span className="text-xs">&#10227;</span>Reload App</button>
            <button type="button" className={"bg-red-2 p-2 px-4 pr-5 text-sm rounded-xl flex items-center gap-2"}><span className="text-xs">x</span>Clear Player Scores</button>
            <button type="button" className={"bg-red-2 p-2 px-4 pr-5 text-sm rounded-xl flex items-center gap-2"}><span className="text-xs">x</span>Remove All Players</button>
            <button type="button" className={"bg-red-2 p-2 px-4 pr-5 text-sm rounded-xl flex items-center gap-2"}><span className="text-xs">x</span>Full Reset</button>
        </div>
    );

};


export default DangerZone;