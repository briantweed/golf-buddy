import Select, {components} from "react-select";
import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";
import ClearIcon from "@components/icons/ClearIcon";
import ChevronIcon from "@components/icons/ChevronIcon";
import CloseModalIcon from "@components/icons/CloseModalIcon";


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
                ),
                DropdownIndicator: (props) => {
                    return (
                        <components.DropdownIndicator {...props}>
                            <ChevronIcon styling={{"variant": "black"}}/>
                        </components.DropdownIndicator>
                    );
                },
                Control: ({children, ...props}) => (
                    <components.Control
                        {...props}
                        innerProps={{
                            ...props.innerProps,
                            "data-cy": `th_${id}`
                        }}
                    >{children}</components.Control>
                ),
                ClearIndicator: (props) => (
                    <components.ClearIndicator {...props}>
                        <CloseModalIcon styling={{"color": "black"}} label={"delete"}/>
                    </components.ClearIndicator>
                ),
                MultiValueRemove: (props) => (
                    <components.MultiValueRemove {...props}>
                        <ClearIcon
                            tabIndex={"0"}
                        />
                    </components.MultiValueRemove>
                ),
                IndicatorSeparator: () => null,
                Option: ({innerProps, ...props}) => (
                    <components.Option
                        {...props}
                        innerProps={{
                            ...innerProps,
                            "data-cy": `th_${id}_${props.value}`
                        }}
                    >{props.label}</components.Option>
                )
            }}
            {...rest}
        />
    );

};


export default TypeAhead;