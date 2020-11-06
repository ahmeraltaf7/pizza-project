import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2300);
  }, []);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  return (
    <>
      {loading === false ? (
        <div>
          <Header />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route path="/base">
                <Base addBase={addBase} pizza={pizza} />
              </Route>
              <Route path="/toppings">
                <Toppings addTopping={addTopping} pizza={pizza} />
              </Route>
              <Route path="/order">
                <Order pizza={pizza} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
