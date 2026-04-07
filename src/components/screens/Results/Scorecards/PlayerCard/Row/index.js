import {useState} from "react";

import Modal from "@components/utility/Modal";
import {ANIMATION_TIMEOUT_DELAY} from "@files/config";
import fadeOutSlideDownModalAnimation from "@files/animations/fadeOut-slideDown-modal-animation";


const Row = (props) => {

    const {
        id,
        player,
        settings,
        type,
        scores,
        totalScore,
        holes,
        updatePlayerScore
    } = props;


    const getBgColor = (par, stroke) => {

        let bgColor = "bg-pastel-red-2";
        const underPar = isNaN(stroke) ? 0 : par - stroke;

        switch (underPar) {
            case -1:
                bgColor = "bg-pastel-red-1";
                break;

            case 0:
            case "NaN":
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
                const bgColor = getBgColor(parValue, strokeValue);
                return (
                    <div
                        key={index}
                        onClick={() => handleDisplay(true, index)}
                        onKeyDown={() => {}}
                    >
                        <div className={"text-center font-semibold bg-lightBlue py-1 rounded-t-lg"}>{type === "In" ? index + 10 : index + 1}</div>
                        <div className={"grid grid-cols-2 grow"}>
                            <div className={"py-1 bg-grey-1 rounded-bl-lg text-[18px] flex items-center justify-center text-center"}>{parValue}</div>
                            <div className={`py-1 ${bgColor} rounded-br-lg font-medium text-black flex items-center justify-center text-center`}>{strokeValue}</div>
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
                >
                    <div className="flex gap-4 flex-col justify-between">

                        <div>
                            <h2 className={"font-medium text-3xl mb-2"}>{player.Name}</h2>
                            <hr className={"mb-2"} />
                            <div className="flex justify-between text-lg ">
                                <div className="flex justify-start gap-12">
                                    <div><span className="font-medium text-grey-3 mr-1">Course : </span>{settings.CourseName}</div>
                                    <div><span className="font-medium text-grey-3">Hole : </span>{type === "In" ? index + 10 : index + 1}</div>
                                    <div><span className="font-medium text-grey-3">Par : </span> {holes[index]}</div>
                                </div>
                                {scores[index] > 0 && <div><span className="font-medium text-grey-3">Stroke : </span>{scores[index]}</div>}
                            </div>
                        </div>

                        <div className="flex justify-center gap-4 w-full my-8">
                            {values.map((value, key) => {
                                const bgColor = getBgColor(holes[index], value);
                                return (
                                    <button
                                        key={key}
                                        type={"button"}
                                        className={`p-4 relative flex-1 h-[60px] flex justify-center items-center text-white rounded-md  ${scores[index] === value ? "bg-newBlue" : "bg-blue"}`}
                                        onClick={() => {
                                            updatePlayerScore(id, type === "In" ? index + 9 : index, value);
                                            fadeOutSlideDownModalAnimation();
                                            setTimeout(() => {
                                                handleDisplay(false);
                                            }, ANIMATION_TIMEOUT_DELAY);
                                        }}
                                    >{value} <span className={`${bgColor} absolute w-2 rounded-full h-2 -bottom-5 left-[calc(50%-4px)]`}/></button>
                                );
                            })}
                        </div>

                    </div>

                </Modal>
            )}

        </div>
    );

};


export default Row;