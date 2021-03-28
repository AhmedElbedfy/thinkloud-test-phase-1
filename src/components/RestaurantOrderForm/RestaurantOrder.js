import React from 'react';
import AddMealForm from './RestaurantOrder/AddMealForm/AddMealForm';
import AddOrderForm from './RestaurantOrder/AddOrderForm/AddOrderForm';
import FormNavigation from './RestaurantOrder/FormNavigation/FormNavigation';
import './RestaurantOrder.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reports from './RestaurantOrder/Reports';

function CheckoutForm() {

    return (
        <div className="restaurant-form">
            <Router>
                <h1>Restaurant Order</h1>
                <FormNavigation />
                <Switch>
                    <Route exact path="/" component={AddMealForm} />
                    <Route exact path="/add-order" component={AddOrderForm} />
                    <Route exact path="/reports" component={Reports} />
                </Switch>
            </Router>
        </div>
    )
}

export default CheckoutForm
