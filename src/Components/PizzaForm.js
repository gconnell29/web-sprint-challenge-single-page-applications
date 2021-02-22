import React from 'react';

const PizzaForm = () => {
  return (
    <section className="pizzaForm">
      <h2>Build Your Own Pizza</h2>
      <form>
        <div className="heading">Choose Your Size</div>
        <label>
          <select name="size">
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
          /> Marinara
        </label>
        <label> 
          <input
            name="sauce"
            type="radio"
          /> Garlic Ranch
        </label>
        <label>
          <input
            name="sauce"
            type="radio"
          /> BBQ Sauce
        </label>
        <label>
          <input
            name="sauce"
            type="radio"
          /> Spinach Alfredo
        </label>
      </form>
    </section>
  );
}

export default PizzaForm;