import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";

import Link from "next/link";


const InternalLink = ({styling, children, ...rest}) => {

    const className = useStyling(styles, styling);


    return (
        <Link
            className={className}
            {...rest}
        >{ children }</Link>
    );

};


export default InternalLink;
