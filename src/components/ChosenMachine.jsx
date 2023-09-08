import React from "react";
import MachineList from "./MachineList";

const ChoosenMachine = ({ machine, updateState }) => {
  return (
    <>
      <div className="container-fluid text-center mt-4 mb-3">
        <h1>Chosen Machines</h1>

        <MachineList machine={machine} updateStatus={updateState} />
      </div>
    </>
  );
};

export default ChoosenMachine;
