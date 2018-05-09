import React from 'react';

const ChoosenDataTable = (props) => {

    const table = props.view.map((element, index) => {
        return (
            <tr key={index}>
                <td>{element.effectiveDate}</td>
                <td>{element.bid}</td>
                <td>{element.ask}</td>
            </tr>
        )
    });

    function Tab(table) {
        //console.log(table);
        if (table.length === 0) {
            return <div></div>;
        } else {
            return (
                <table>
                    <thead style={{backgroundColor: '#218380', color: 'white'}}>
                        <tr>
                            <th>Data</th>
                            <th>Kupno</th>
                            <th>Sprzedaż</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </table>
            );
        }
    }

    return (
        <div>{Tab(table)}</div>
    )
}

export default ChoosenDataTable;