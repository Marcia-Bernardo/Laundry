import React, { useState } from "react";

const Balance = ({ userBalance, addMoney }) => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="container">
        <div className="text-center m-3">
          <h1>Balance</h1>
        </div>
        <p>Saldo: {userBalance.balance}</p>

        <div class="mb-3 row">
          <label for="value" class="col-sm-1 col-form-label">
            Value:
          </label>
          <div class="col-sm-3">
            <input
              min="0"
              type="number"
              step="0.25"
              class="form-control"
              name="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div class="col-sm-3">
            <button
              type="button"
              class="btn btn-primary mb-3"
              onClick={() => addMoney(value)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
