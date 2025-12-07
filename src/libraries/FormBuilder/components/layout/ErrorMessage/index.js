import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";
import ErrorIcon from "@components/icons/ErrorIcon";


const ErrorMessage = ({children}) => {

    const className = useStyling(styles, {...{"color": "warning"}});

    return (
        <div className="flex justify-end">
            <span className={className}><ErrorIcon/> {children}</span>
        </div>
    );

};


export default ErrorMessage;
