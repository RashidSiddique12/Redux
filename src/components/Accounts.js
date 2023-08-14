import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../slices/accountSlice";

function Accounts() {
  const [value, setValue] = useState(0);

  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", padding: "25px" }}>
      <h3
        style={{
          border: "2px solid green",
          padding: "3px",
          background: "black",
        }}
      >
        Account Components
      </h3>
      <div>
        <h2>Account : {amount}</h2>
        <h2>Points : {points}</h2>
      </div>
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
      <input type="text" onChange={(e) => setValue(+e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(value))}>
        Increment by {value} Amount
      </button>

      <hr />
    </div>
  );
}

export default Accounts;
