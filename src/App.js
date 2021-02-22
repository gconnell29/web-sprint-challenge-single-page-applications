import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import PizzaForm from './Components/PizzaForm.js';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Route exact path="/"><button>Home</button></Route>
          <Route path="/"><button>Help</button></Route>
        </nav>
      </header>
      <div className="banner">
        <Route path="/"><button className="order-btn">Order Now</button></Route>
      </div>
      <PizzaForm />
    </div>
  );
};
export default App;
