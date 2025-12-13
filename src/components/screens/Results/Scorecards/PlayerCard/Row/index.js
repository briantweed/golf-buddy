import storedGameData from "@files/config/test-game";


const Row = (props) => {

    const {
        type,
        holes,
        score
    } = props;

    const {Holes} = storedGameData;


    const getBgColor = (underPar) => {
        let bgColor = "bg-pastel-red-2";

        switch (underPar) {
            case -1:
                bgColor = "bg-pastel-red-1";
                break;

            case 0:
                bgColor = "bg-grey-2";
                break;

            case 1:
                bgColor = "bg-pastel-green-1";
                break;

            case 2:
            case 3:
            case 4:
                bgColor = "bg-pastel-green-2";
                break;
        }

        return bgColor;
    };


    return (
        <div className={"grid grid-cols-10 gap-2"}>

            {holes.map((score, index) => {
                const parValue = Holes[index].Par;
                const strokeValue = score.Stroke;
                const bgColor = getBgColor(parValue - strokeValue);
                return (
                    <div key={index}>
                        <div
                            className={"text-center font-semibold bg-lightBlue py-1 rounded-t-lg"}>{index + 1}</div>
                        <div className={"grid grid-cols-2 grow"}>
                            <div
                                className={"py-1 bg-grey-1 rounded-bl-lg flex items-center justify-center text-center"}>{parValue}</div>
                            <div
                                className={`py-1 ${bgColor} rounded-br-lg text-black flex items-center justify-center text-center`}>{strokeValue}</div>
                        </div>
                    </div>
                );
            })}

            <div>
                <div className={"text-center font-semibold bg-blue py-1 rounded-t-lg"}>{type}</div>
                <div className={"flex"}>
                    <div className={"py-1 bg-grey-2 text-black font-semibold text-xl rounded-bl-lg rounded-br-lg w-28 flex items-center justify-center text-center"}>{score}</div>
                </div>
            </div>

        </div>
    );

};


export default Row;