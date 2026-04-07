import {useState} from "react";

import Modal from "@components/utility/Modal";
import {ANIMATION_TIMEOUT_DELAY} from "@files/config";
import fadeOutSlideDownModalAnimation from "@files/animations/fadeOut-slideDown-modal-animation";


const Row = (props) => {

    const {
        id,
        player,
        type,
        scores,
        totalScore,
        holes,
        updatePlayerScore
    } = props;


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

    const [display, setDisplay] = useState(false);
    const [index, setIndex] = useState(null);


    const handleDisplay = (bool, index = null) => {
        setDisplay(bool);
        setIndex(index);
    };

    const values = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div className={"grid grid-cols-10 gap-2"}>

            {holes.map((score, index) => {
                const parValue = score;
                const strokeValue = scores[index] || "-";
                const bgColor = getBgColor(parValue - strokeValue);
                return (
                    <div
                        key={index}
                        onClick={() => handleDisplay(true, index)}
                        onKeyDown={() => {}}
                    >
                        <div className={"text-center font-semibold bg-lightBlue py-1 rounded-t-lg"}>{type === "In" ? index + 10 : index + 1}</div>
                        <div className={"grid grid-cols-2 grow"}>
                            <div className={"py-1 bg-grey-1 rounded-bl-lg flex items-center justify-center text-center"}>{parValue}</div>
                            <div className={`py-1 ${bgColor} rounded-br-lg text-black flex items-center justify-center text-center`}>{strokeValue}</div>
                        </div>
                    </div>
                );
            })}

            <div>
                <div className={"text-center font-semibold bg-blue py-1 rounded-t-lg"}>{type}</div>
                <div className={"flex"}>
                    <div className={"py-1 bg-grey-2 text-black font-semibold text-xl rounded-bl-lg rounded-br-lg w-28 flex items-center justify-center text-center"}>{totalScore}</div>
                </div>
            </div>

            {display && (
                <Modal
                    display={display}
                    handleClose={() => handleDisplay(false)}
                ><h2 className={"font-medium text-2xl"}>{player.Name}</h2>
                    <hr/>
                    <br/>
                    <div className="flex justify-between">
                        <div>Hole {type === "In" ? index + 10 : index + 1}</div>
                        <div>Stroke: {scores[index]}</div>
                    </div>
                    <br/>
                    <br/>
                    <div className="flex justify-center gap-2 w-full">
                        {values.map((value, key) => {
                            return (
                                <button
                                    key={key}
                                    type={"button"}
                                    className={`p-4 flex-1 h-[50px] flex justify-center items-center text-white rounded-md  ${scores[index] === value ? "bg-newBlue" : "bg-blue"}`}
                                    onClick={() => {
                                        updatePlayerScore(id, type === "In" ? index + 9 : index, value);
                                    }}
                                >{value}</button>
                            );
                        })}
                    </div>
                    <div className="mt-8">
                        <button
                            type={"button"}
                            className={`px-4 py-2 flex justify-center items-center text-white rounded-md bg-darkGreen`}
                            onClick={() => {
                                fadeOutSlideDownModalAnimation();
                                setTimeout(() => {
                                    handleDisplay(false);
                                }, ANIMATION_TIMEOUT_DELAY);
                            }}
                        >close</button>
                    </div>
                </Modal>
            )}

        </div>
    );

};


export default Row;