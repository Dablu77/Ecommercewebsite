import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import { Home } from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login";
import Reals from "./Reals";
import Oreder from "./Orders";


function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />



        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orders">
            <Oreder />
          </Route>
          <Route path="/reals">
            <Reals />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          {/* <Route path="*" element={<h1>Error 404 page not found !!</h1>} /> */}
        </Switch>
      </div>

    </Router>

  );
}

export default App;
