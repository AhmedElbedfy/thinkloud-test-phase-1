import React from 'react';

function TableRow({ order }) {
    return (
        <tr>
            {
                order.map((item) => {
                    return <th key={item.index}>{item}</th>
                })
            }
        </tr>
    )
}

export default TableRow;
