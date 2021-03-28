import React, { useEffect, useState } from 'react';
import './Grid.css';
import Button from '../../../Buttons/Button';
import TableRow from './TableRow';


function Grid({ orders, emptyAllField, emptyOrderList }) {

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        orders.forEach((order) => {
            setTotalPrice(prev => prev + order[4]);
        })
    }, [orders])

    function handleSubmit() {
        emptyAllField();
        emptyOrderList();
        setTotalPrice(0);
    }

    return (

        <div className="grid">
            <table>
                <tr>
                    <th>Item</th>
                    <th>Q</th>
                    <th>Price</th>
                    <th>Addons</th>
                    <th>Total</th>
                </tr>
                {
                    orders.map(order => {
                        return <TableRow key={order.index} order={order} />
                    })
                }
                <tr className="last-tr">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <div className="total">
                Total {totalPrice} LE
            </div>
            <div className="new-order-btn">
                <Button text="New Order" buttonClass="primary-button" onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default Grid

