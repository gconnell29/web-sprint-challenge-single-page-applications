import React from "react";
import axios from 'axios';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <button>Home</button>
          <button>Help</button>
        </nav>
      </header>
      <div className="banner">
        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
};
export default App;
