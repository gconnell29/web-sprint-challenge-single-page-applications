import React from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import PizzaForm from './Components/PizzaForm.js';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/"><button>Home</button></Link>
          <Link to="/pizza"><button>Order</button></Link>
        </nav>
      </header>
      <div className="banner">
        <Link to="/pizza"><button className="order-btn">Order Now</button></Link>
      </div>
      <Switch>
        {/* <Route exact path="/">
          <App />
        </Route> */}
        <Route path="/pizza">
          <PizzaForm />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
