import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PizzaForm = () => {
  const [orders, setOrders]=useState({
    name: '',
    size: '',
    sauce: '',
    topping: [],
    instruction: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    // Axios
    setOrders({
      name: '',
      size: '',
      sauce: '',
      topping: [],
      instruction: ''
    })
  }

  function handleChange(event) {
    let value = event.target.value;
    setOrders({...orders, [event.target.name]: value })
  }

  function handleCheckbox(event) {
    if (event.target.checked) {
      // Add topping to array
      setOrders({...orders, topping: [...orders.topping, event.target.value ]})
    } else {
      // Remove topping from array
      let updated = orders.topping.filter(item => item !== event.target.value)
      setOrders({...orders, topping: updated })
    }
  }

  return (
    <section className="pizzaForm">
      <h2>Build Your Own Pizza</h2>
      <label> Who is this order for? <br />
        <input
          name="name"
          type="text"
          value={orders.name}
        />
      </label>
      <form onSubmit={handleSubmit}>
        <div className="heading">Choose Your Size</div>
        <label>
          <select name="size"
          value={orders.size}>
            <option>--Select One--</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>
        <div className="heading">Choose Your Sauce</div>
        <label>
          <input
            name="sauce"
            type="radio"
            onChange={handleChange}
            value="Marinara"
          /> Marinara
        </label>
        <label> 
          <input
            name="sauce"
            type="radio"
            onChange={handleChange}
            value="Garlic Ranch"
          /> Garlic Ranch
        </label>
        <label>
          <input
            name="sauce"
            type="radio"
            onChange={handleChange}
            value="BBQ Sauce"
          /> BBQ Sauce
        </label>
        <label>
          <input
            name="sauce"
            type="radio"
            onChange={handleChange}
            value="Spinach Alfredo"
          /> Spinach Alfredo
        </label>
        <div className="heading">Choose Your Toppings</div>
        <label>
          <input
            name="topping"
            type="checkbox"
            onChange={handleCheckbox}
            value="Pepperoni"
          /> Pepperoni
        </label>
        <label>
          <input
            name="topping"
            type="checkbox"
            onChange={handleCheckbox}
            value="Sausage"
          /> Sausage
        </label>
        <label>
          <input
            name="topping"
            type="checkbox"
            onChange={handleCheckbox}
            value="Chicken"
          /> Chicken
        </label>
        <label>
          <input
            name="topping"
            type="checkbox"
            onChange={handleCheckbox}
            value='Veggies'
          /> Veggies
        </label>
        <label> Special Instructions? <br />
        <input
          name="instruction"
          type="text"
          onChange={handleChange}
          value={orders.instruction}
        />
      </label>
        <button type="submit">Add to Order!</button>
      </form>
    </section>
  );
}

export default PizzaForm;