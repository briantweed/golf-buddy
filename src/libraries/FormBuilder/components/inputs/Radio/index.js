import useStyling from "../../../hooks/useStyling";
import withInputTags from "../../../hoc/withInputTags";
import styles from "./styles.module.scss";


const Radio = ({register, styling = {}, ...rest}) => {

    const className = useStyling(styles, styling);

    return (
        <input
            {...register}
            {...rest}
            className={className}
            type={"radio"}
        />
    );

};


export default withInputTags(Radio);
