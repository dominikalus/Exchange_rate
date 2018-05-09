import React from 'react';

const MainTable = (props) => {

    const list = props.myData.map((element, index) => {
        return (
            <tr key={index}>
                <td>{element.currency}</td>
                <td>{element.code}</td>
                <td>{element.bid}</td>
                <td>{element.ask}</td>
            </tr>
        )
    });

    return (
        <table>
            <thead style={{backgroundColor: '#218380', color: 'white'}} >
                <tr>
                    <th>Nazwa Waluty</th>
                    <th>Kod waluty</th>
                    <th>Kupno</th>
                    <th>Sprzedaż</th>
                </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
        </table>
    );
}

export default MainTable;