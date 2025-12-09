const useStyling = (styles, styling = {}) => {

    const theme = "default";

    let classes = [styles.contents, styles[theme]];

    if (!!(Object.keys(styling).length)) {
        Object.entries(styling).forEach(([key, value]) => {
            if (key === "className") {
                classes.push(value);
            }
            else {
                if (Array.isArray(value)) {
                    value.forEach((c) => {
                        classes.push(styles[c]);
                    });
                }
                classes.push(styles[value]);
            }
        });
    }

    return classes.join(" ").trim();

};


export default useStyling;