import React from "react";
import Home from "./components/Home";
import "./App.css";
import ExpenseState from "./context/expense/ExpenseState";

const App = () => {
  return (
    <div className="bgcolor">
      <ExpenseState>
        <Home />
      </ExpenseState>
    </div>
  );
};

export default App;
