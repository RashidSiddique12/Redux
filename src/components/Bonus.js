import React from "react";
import { incrementBonus } from "../actions";
import { useDispatch, useSelector } from "react-redux";

function Bonus() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h3
        style={{
          border: "2px solid green",
          padding: "3px",
          background: "black",
        }}
      >
        Bonus Components
      </h3>
      <h2>Amount : {amount}</h2>
      <h2>Total Point : {points}</h2>
      <button onClick={() => dispatch(incrementBonus())}>Increment +</button>
    </div>
  );
}

export default Bonus;
