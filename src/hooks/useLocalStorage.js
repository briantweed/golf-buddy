const useLocalStorage = () => {

    const initialState = {
        CourseName: "",
        RoundType: "",
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
        const {Players, ...rest} = data;
        localStorage.setItem("data", JSON.stringify({
            ...currentData,
            ...rest,
            Players: currentData?.Players?.map((player, index) => {
                return {
                    ...player,
                    ...Players[index]
                };
            })
        }));
    };

    const settings = JSON.parse(localStorage.getItem("data"));

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