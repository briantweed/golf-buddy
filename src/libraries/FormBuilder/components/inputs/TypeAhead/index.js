import Select, {components} from "react-select";
import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";


const TypeAhead = (props) => {

    const {
        id,
        value = "",
        styling,
        ...rest
    } = props;

    const className = useStyling(styles, styling);

    const currentSelection = rest.options.find((option) => option.value === value);


    return (
        <Select
            classNamePrefix="react-select"
            className={className}
            value={currentSelection}
            defaultMenuIsOpen={false}
            isClearable={true}
            isSearchable={true}
            components={{
                Input: ({children, ...props}) => (
                    <components.Input
                        {...props}
                        id={id}
                    >{children}</components.Input>
                )
            }}
            {...rest}
        />
    );

};


export default TypeAhead;