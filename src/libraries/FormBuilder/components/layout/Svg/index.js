const Svg = (props) => {

    const {
        src,
        ...rest
    } = props;

    const imagePath = src ? "svg/" + src.trim() + ".svg" : "";


    return (
        <img
            data-cy={imagePath}
            alt={""}
            src={imagePath}
            {...rest}
        />
    );

};


export default Svg;
