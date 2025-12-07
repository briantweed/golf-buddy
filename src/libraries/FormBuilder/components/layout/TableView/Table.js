const Table = (props) => {

    const {rows} = props;


    return (
        <table>
            <thead>
                <tr>
                    {Object.entries(rows[0]).map(([key,], index) => {
                        return (
                            <th key={index}>{key}</th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => {
                    return (
                        <tr key={index}>
                            {Object.entries(row).map(([, value], index) => {
                                return (
                                    <td key={index}>{value}</td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );

};

export default Table;