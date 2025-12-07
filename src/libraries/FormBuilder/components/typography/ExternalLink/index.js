import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";


const ExternalLink = ({children, styling, href, ...rest}) => {

    const className = useStyling(styles, styling);


    return (
        <a
            className={className}
            rel="noreferrer noopener"
            href={process.env.NEXT_PUBLIC_ENV === "local" ? "#0" : href}
            {...rest}
        >{ children }</a>
    );

};


export default ExternalLink;
