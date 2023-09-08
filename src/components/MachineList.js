import React from "react";
import MachineCard from "./MachineCard";

const MachineList = ({ machines, updateStatus, statusMachine }) => {
  return (
    <>
      <div
        className="container justify-content-center"
        style={{ width: "20rem" }}
      >
        {machines.map((machine) => (
          <MachineCard
            machine={machine}
            updateStatus={updateStatus}
            state={statusMachine}
          />
        ))}
      </div>
    </>
  );
};

export default MachineList;
