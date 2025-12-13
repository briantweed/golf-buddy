const DangerZone = () => {

    return (
        <div className={"flex flex-col items-start gap-4"}>
            <button type="button" className={"bg-red-2 p-2 px-4 pr-5 text-sm rounded-xl flex items-center gap-3"}><span className="text-xs">x</span> Clear Player Scores</button>
            <button type="button" className={"bg-red-2 p-2 px-4 pr-5 text-sm rounded-xl flex items-center gap-3"}><span className="text-xs">x</span> Remove All Players</button>
            <button type="button" className={"bg-red-2 p-2 px-4 pr-5 text-sm rounded-xl flex items-center gap-3"}><span className="text-xs">x</span> Full Reset</button>
        </div>
    );

};


export default DangerZone;