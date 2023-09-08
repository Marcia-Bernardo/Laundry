import React, { useState } from "react";

const Balance = ({ userBalance, addMoney }) => {
  const [value, setValue] = useState(0);
  const addValue = () => {
    addMoney(value);
    setValue("");
  };

  return (
    <>
      <div className="container">
        <div className="text-center m-3">
          <h1>Balance</h1>
        </div>
        <p>Saldo: {userBalance.balance}</p>

        <div className="mb-3 row">
          <label htmlFor="value" className="col-sm-1 col-form-label">
            Value:
          </label>
          <div className="col-sm-3">
            <input
              min="0"
              type="number"
              step="0.25"
              className="form-control"
              name="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <button
              type="button"
              className="btn btn-primary mb-3"
              onClick={addValue}
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
