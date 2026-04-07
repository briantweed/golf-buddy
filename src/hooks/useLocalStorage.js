import {useEffect, useState} from "react";

const useLocalStorage = () => {

    const [settings, setSettings] = useState(null);

    const initialState = {
        CourseName: "",
        RoundLength: "",
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

        const updatedPlayers = settings.Players.map((player, id) => {
            const safeScores = Array.isArray(player.Scores)
                ? [...player.Scores]
                : Array(Number(settings.RoundLength)).fill(0);

            return {
                ...player,
                Scores: id === playerIndex
                    ? safeScores.map((s, i) => i === holeIndex ? newStroke : s)
                    : safeScores
            };
        });

        const updatedData = {
            ...settings,
            Players: updatedPlayers
        };

        localStorage.setItem("data", JSON.stringify(updatedData));
        setSettings(updatedData);
    };


    const updateSettings = (data) => {
        const currentData = JSON.parse(localStorage.getItem("data"));
        localStorage.setItem("data", JSON.stringify({
            ...currentData,
            ...data
        }));
    };


    const handleSettings = () => {
        setSettings(JSON.parse(localStorage.getItem("data")));
    };


    useEffect(() => {
        handleSettings();
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