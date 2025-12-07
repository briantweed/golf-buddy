import Button from "../../buttons/Button";
import Svg from "../../layout/Svg";


const SubmitButton = (props) => {

    const {
        error,
        config: {
            id,
            text,
            icon = {},
            ...rest
        }
    } = props;

    let {styling} = rest;

    let buttonContent = text;

    if (icon.src) {
        if (icon.position === "before") {
            buttonContent = <><Svg src={icon.src}/> {text}</>;
            styling = {
                ...styling,
                "position": "icon-before"
            };
        }
        else {
            buttonContent = <>{text} <Svg src={icon.src}/></>;
            styling = {
                ...styling,
                "position": "icon-after"
            };
        }
    }


    return (
        <Button
            data-cy={`th_${id}-Button`}
            disabled={error}
            type={"submit"}
            {...rest}
            styling={styling}
        >{ buttonContent }</Button>
    );

};


export default SubmitButton;
