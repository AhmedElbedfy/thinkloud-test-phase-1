import React from 'react';
import Button from '../../../Buttons/Button';
import './AddMealForm.css';

function AddMealForm() {
    return (
        <div className="meal-form">
            <form action="">
                <div className="element-container">
                    <div className="inputs">

                        <div className="flex">
                            <label htmlFor="name">name</label>
                            <input type="text" id="name" name="name" required autoFocus />
                        </div>

                        <div className="flex">
                            <label htmlFor="price">price</label>
                            <input type="number" id="price" name="price" min='1' required />
                        </div>

                        <div className="flex">
                            <label htmlFor="desciption">desciption</label>
                            <textarea id="desciption" name="desciption" rows="4" cols="50" required></textarea>
                        </div>

                        <div className="flex">
                            <label htmlFor="category">category</label>
                            <select id="category" name="category" required>
                                <option value="pizza">Pizza</option>
                                <option value="pasta">Pasta</option>
                                <option value="meats">Meats</option>
                                <option value="soups">Soups</option>
                            </select>
                        </div>

                    </div>

                    <div className="image">
                        <img src="assets/unnamed.png" alt="placeholder" />
                        <label class="custom-file-upload">
                            <input type="file" id="image" name="image" accept="image/png, image/jpeg, image/jpg" required />
                            Select image
                        </label>
                    </div>
                </div>
                <div className="submit-button">
                    <Button text="save" buttonClass="primary-button" />
                </div>
            </form>
        </div>
    )
}

export default AddMealForm
