import React, { useState } from 'react';
import Button from '../../../Buttons/Button';
import "./AddOrderForm.css";
import Grid from './Grid';

// Different categorious Meals data
const pizzaMeals = [
    { v: "margherita", n: "Margherita" },
    { v: "chicken-supreme", n: "Chicken Supreme" },
    { v: "classic-pepperoni", n: "Classic Pepperoni" },
    { v: "vegetarian", n: "Vegetarian" },
];
const pastaMeals = [
    { v: "hay-and-straw", n: "Hay and Straw" },
    { v: "rigatoni-with-sausage-&-peas", n: "Rigatoni with Sausage & Peas" },
    { v: "potluck-macaroni-and-cheese", n: "Potluck Macaroni and Cheese" },
    { v: "spaghetti-pie-casserole", n: "Spaghetti Pie Casserole" }
];
const meatsMeals = [
    { v: "salmon", n: "Salmon" },
    { v: "beef-&-broccoli", n: "Beef & broccoli" },
    { v: "fish-tacos", n: "Fish tacos" },
    { v: "chicken-wings", n: "Chicken wings" },
    { v: "chicken-permesan", n: "Chicken parmesan" }
];
const soupsMeals = [
    { v: "meatball-subs", n: "Meatball subs" },
    { v: "split-pea-soup", n: "Split Pea Soup" },
    { v: "creamy-bratwurst-stew", n: "Creamy Bratwurst Stew" },
    { v: "creamed-garden-potatoes-and-peas", n: "Creamed Garden Potatoes and Peas" }
];

function AddOrderForm() {

    // category
    const [category, setCategory] = useState("");
    const [categPrice, setCategPrice] = useState(40);

    // options which meal category define which data option
    const [options, setOptions] = useState([]);

    // addons Price
    const [addonsPrice, setAddonsPrice] = useState(0);

    // addons check inputs
    const [ComboChecked, setComboIsChecked] = useState(false);
    const [spicyChecked, setSpicyIsChecked] = useState(false);
    // quentity
    const [quantity, setQuantity] = useState(0);

    // order for all the information in the order to add it to the Grid
    const [order, setOrder] = useState([]);

    // item
    const [item, setItem] = useState("");


    // chosie which categoriy to show which meals list
    function changeMeals(meal) {

        setCategory(meal);
        switch (meal) {
            case "pizza":
                setOptions(pizzaMeals);
                setCategPrice(50);
                break;
            case "pasta":
                setOptions(pastaMeals)
                setCategPrice(40);
                break;
            case "meats":
                setOptions(meatsMeals)
                setCategPrice(80);
                break;
            case "soups":
                setOptions(soupsMeals)
                setCategPrice(30);
                break;
            default:
                setOptions(pastaMeals)
                setCategPrice(0);
        }
    }

    // to handle Add button and send the data to the grid
    function handleSubmit(e) {
        e.preventDefault();
        setOrder((prev) => {
            return [...prev, [item, quantity, categPrice, addonsPrice, (addonsPrice + (categPrice * quantity))]]
        });

        emptyAllField();
    }

    function emptyAllField() {
        // empty all the field on submit
        setCategory("");
        setItem("");
        setQuantity(0);
        setAddonsPrice(0);
        setComboIsChecked(false);
        setSpicyIsChecked(false);
    }

    function emptyOrderList() {
        // empty order list after "New Order" button is Clicked
        setOrder([]);
    }



    return (
        <div className="order-form">
            <form onSubmit={handleSubmit}>
                <div className="flex-container">
                    <div className="left">
                        <div className="flex">
                            <label htmlFor="category">category</label>
                            <select id="category" name="category" onChange={(e) => { changeMeals(e.target.value) }} required value={category} autoFocus>
                                <option value=""></option>
                                <option value="pasta">Pasta</option>
                                <option value="meats">Meats</option>
                                <option value="pizza">Pizza</option>
                                <option value="soups">Soups</option>
                            </select>
                        </div>
                        <div className="flex">
                            <label htmlFor="meal">meal</label>
                            <select id="meal" name="meal" onChange={(e) => { setItem(e.target.value); }} value={item} required>
                                <option value=""></option>
                                {/* show the meals options after chossing categ */}
                                {options.map(({ v, n }) => {
                                    return <option key={v} value={v}>{n}</option>;

                                })}
                            </select>
                        </div>
                        <div className="flex">
                            <label htmlFor="quntity">quntity</label>
                            <input min="1" type="number" id="quntity" name="quntity" required onChange={(e => setQuantity(e.target.value))} value={quantity} />
                        </div>
                    </div>
                    <div className="right">
                        {/* referance for checkbox ==> http://react.tips/checkboxes-in-react/ */}

                        <div className="Additions">
                            <input
                                type="checkbox"
                                id="combo"
                                name="combo"
                                value="combo"
                                checked={ComboChecked}
                                onChange={
                                    () => {
                                        setAddonsPrice((prev) => !ComboChecked ? prev + 2 : prev - 2);
                                        setComboIsChecked(!ComboChecked);
                                    }
                                }
                            />

                            <label htmlFor="combo">Combo - add 2LE</label>

                        </div>
                        <div className="Additions">
                            <input
                                type="checkbox"
                                id="spicy"
                                name="spicy"
                                value="spicy"
                                checked={spicyChecked}
                                onChange={
                                    () => {
                                        setAddonsPrice((prev) => !spicyChecked ? prev + 1 : prev - 1);
                                        setSpicyIsChecked(!spicyChecked);
                                    }
                                }
                            />
                            <label htmlFor="spicy">Spicy - add 1LE</label>
                        </div>

                        <div className="price">
                            Price {addonsPrice + (categPrice * quantity)} LE
                        </div>
                    </div>
                </div>
                <Button
                    text="Add"
                    buttonClass="primary-button"
                />
            </form>
            <Grid
                orders={order}
                emptyAllField={emptyAllField}
                emptyOrderList={emptyOrderList}
            />
        </div>
    )
}

export default AddOrderForm
