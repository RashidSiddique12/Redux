import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./App.css";
import Accounts from "./components/Accounts";
import Bonus from "./components/Bonus";

export default function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const account = useSelector((state) => state.account);

  return (
    <div className="main">
      <div className="app">
        <h2
          style={{
            border: "2px solid green",
            padding: "3px",
            background: "blue",
          }}
        >
          App Components
        </h2>
        {account.pending ? (
          <p>Loading...</p>
        ) : account.error ? (
          <p>{account.error}</p>
        ) : (
          <h2>Current Account : {amount}</h2>
        )}
        {/* <h2>Current Account : {amount}</h2> */}
        <h2>Total Bonus : {points}</h2>
      </div>
      <div className="other">
        <Accounts />
        <Bonus />
      </div>
    </div>
  );
}
