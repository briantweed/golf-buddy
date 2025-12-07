import withInputTags from "../../../hoc/withInputTags";
import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";

import InputMask from "@mona-health/react-input-mask";


const Input = ({register, styling = {}, ...rest}) => {

    const className = useStyling(styles, styling);

    return (
        <InputMask
            {...register}
            type={"text"}
            className={className}
            {...rest}
        />
    );

};


export default withInputTags(Input);
