import React, { useState } from "react";
import MachineList from "../components/MachineList";

const MachineListPage = () => {
  const [machines, setMachines] = useState([
    {
      id: 0,
      kind: 1,
      weight: "3 kg",
      time: 40,
      price: 2.5,
    },
    {
      id: 1,
      kind: 2,
      weight: "3 kg",
      time: 40,
      price: 2.5,
    },
    {
      id: 2,
      kind: 2,
      weight: "6 kg",
      time: 40,
      price: 2.5,
    },
    {
      id: 3,
      kind: 2,
      weight: "3 kg",
      time: 40,
      price: 2.5,
    },
    {
      id: 4,
      kind: 2,
      weight: "6kg",
      time: 40,
      price: 2.5,
    },
  ]);

  const washingMachines = machines.filter((machine) => machine.kind === 1);
  const drierMachines = machines.filter((machine) => machine.kind === 2);
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="m-3">
              <h2>Washing Machine</h2>
            </div>

            <MachineList machines={washingMachines} />
          </div>
          <div className="col">
            <div className="m-3">
              <h2>Drier Machine</h2>
            </div>
            <MachineList machines={drierMachines} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MachineListPage;
