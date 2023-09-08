import React, { useState } from "react";
import MachineListPage from "./MachineListPage";
import UserPage from "./UserPage";

const ManagerPage = ({ showPage }) => {
  const [alert, setAlert] = useState(false);
  const [machines, setMachines] = useState([
    {
      id: 0,
      kind: 1,
      weight: "3 kg",
      time: 40,
      price: 2.5,
      status: "free",
    },
    {
      id: 1,
      kind: 2,
      weight: "3 kg",
      time: 40,
      price: 2.5,
      status: "free",
    },
    {
      id: 2,
      kind: 2,
      weight: "6 kg",
      time: 40,
      price: 4.5,
      status: "free",
    },
    {
      id: 3,
      kind: 2,
      weight: "3 kg",
      time: 40,
      price: 2.5,
      status: "free",
    },
    {
      id: 4,
      kind: 2,
      weight: "6kg",
      time: 40,
      price: 4.5,
      status: "in use",
    },
    {
      id: 5,
      kind: 1,
      weight: "6 kg",
      time: 40,
      price: 5,
      status: "free",
    },
  ]);
  const [userBalance, setUserBalance] = useState({
    id: "2342",
    balance: 2.5,
  });

  const machineFree = machines.filter((machine) => machine.status === "free");
  const machineNotFree = machines.filter(
    (machine) => machine.status === "in use"
  );

  const addMoney = (value) => {
    if (value > 0) {
      setUserBalance({
        id: "2342",
        balance: parseFloat(userBalance.balance) + parseFloat(value),
      });
      setAlert(false);
    }
  };

  const startMachine = (id) => {
    if (id === "") {
      return;
    }

    let indexFound = 0;
    machines.forEach((machine, index) => {
      if (machine.id === id) {
        indexFound = index;
      }
    });
    if (userBalance.balance < machines[indexFound].price) {
      setAlert(true);
      return;
    }
    userBalance.balance = userBalance.balance - machines[indexFound].price;
    setUserBalance({ ...userBalance });
    if (machines[indexFound].status === "free") {
      machines[indexFound].status = "in use";
      setMachines([...machines]);
    }
  };

  if (showPage === "list") {
    return (
      <>
        <MachineListPage
          machines={machineFree}
          updateStatus={startMachine}
          showAlert={alert}
        />
      </>
    );
  }
  if (showPage === "balance") {
    return (
      <>
        <UserPage
          machines={machineNotFree}
          userBalance={userBalance}
          addMoney={addMoney}
          updateStatus={startMachine}
        />
      </>
    );
  }
};

export default ManagerPage;
