import {useEffect, useState} from "react";

const useLocalStorage = () => {

    const [settings, setSettings] = useState(null);

    const initialState = {
        CourseName: "",
        RoundLength: "",
        Holes: [],
        Players: []
    };


    const resetEverything = () => {
        localStorage.setItem("data", JSON.stringify(initialState));
    };


    const resetPlayers = () => {
        const currentData = JSON.parse(localStorage.getItem("data"));
        localStorage.setItem("data", JSON.stringify({
            ...currentData,
            Players: []
        }));
    };


    const resetPlayerScores = () => {
        const currentData = JSON.parse(localStorage.getItem("data"));
        localStorage.setItem("data", JSON.stringify({
            ...currentData,
            Players: currentData.Players.map((player) => ({
                ...player,
                Scores: []
            }))
        }));
    };


    const updatePlayerScore = (playerIndex, holeIndex, newStroke) => {
        const currentData = JSON.parse(localStorage.getItem("data"));
        if (currentData.Players[playerIndex]) {
            currentData.Players[playerIndex].Scores[holeIndex].Stroke = newStroke;
            localStorage.setItem("data", JSON.stringify(currentData));
        }
    };


    const updateSettings = (data) => {
        const currentData = JSON.parse(localStorage.getItem("data"));
        localStorage.setItem("data", JSON.stringify({
            ...currentData,
            ...data
        }));
    };

    useEffect(() => {
        setSettings(JSON.parse(localStorage.getItem("data")));
    }, []);


    return {
        resetEverything,
        resetPlayers,
        resetPlayerScores,
        updatePlayerScore,
        updateSettings,
        settings
    };

};


export default useLocalStorage;