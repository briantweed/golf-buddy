import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";


const ErrorMessage = ({children}) => {

    const className = useStyling(styles, {...{"color": "warning"}});

    return (
        <div className="flex justify-end">
            <span className={className}>{children}</span>
        </div>
    );

};


export default ErrorMessage;
