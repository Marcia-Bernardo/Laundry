import { useState } from "react";
import Balance from "../components/Balance";

const UserPage = () => {
  const [userBalance, setUserBalance] = useState({
    id: "2342",
    balance: 2.5,
  });
  const addMoney = (value) => {
    if (value > 0) {
      setUserBalance({
        id: "2342",
        balance: parseFloat(userBalance.balance) + parseFloat(value),
      });
    }
  };
  return (
    <div>
      <Balance userBalance={userBalance} addMoney={addMoney} />
    </div>
  );
};
export default UserPage;
