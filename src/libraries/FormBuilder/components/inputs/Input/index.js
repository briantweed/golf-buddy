import withInputTags from "../../../hoc/withInputTags";
import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";


const Input = ({register, styling = {}, ...rest}) => {

    const className = useStyling(styles, styling);

    return (
        <input
            {...register}
            type={"text"}
            className={className}
            {...rest}
        />
    );

};


export default withInputTags(Input);
