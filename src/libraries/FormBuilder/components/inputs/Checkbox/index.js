import useStyling from "../../../hooks/useStyling";
import withInputTags from "../../../hoc/withInputTags";
import styles from "./styles.module.scss";

import CheckedIcon from "../../../icons/CheckedIcon";
import UncheckedIcon from "../../../icons/UncheckedIcon";


const Checkbox = ({register, checked, styling = {}, ...rest}) => {

    const className = useStyling(styles, styling);


    return (
        <div className={className}>
            <input
                {...register}
                type={"checkbox"}
                defaultChecked={checked}
                {...rest}
            />
            {checked ? <CheckedIcon/> : <UncheckedIcon/>}
        </div>
    );

};


export default withInputTags(Checkbox);