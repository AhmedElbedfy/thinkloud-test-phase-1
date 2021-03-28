import React from 'react';
import { NavLink } from 'react-router-dom';
import './FormNavigation.css'
function FormNavigation() {


    return (
        <div className='form-nav'>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">Add meal</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/add-order">Add order</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/reports">Reports</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default FormNavigation
