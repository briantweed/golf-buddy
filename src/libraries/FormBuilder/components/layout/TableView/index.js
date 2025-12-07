import {useFormContext} from "react-hook-form";
import useStyling from "../../../hooks/useStyling";
import styles from "./styles.module.scss";

import Table from "./Table";


const TableView = (props) => {

    const {
        config: {
            styling,
            displayField
        }
    } = props;

    const {getValues} = useFormContext();

    const rows = [...getValues(displayField)];

    const className = useStyling(styles, styling);


    return (<div className={className}>

        {rows.length > 0 && (
            <Table rows={rows}/>
        )}

    </div>);

};


export default TableView;
