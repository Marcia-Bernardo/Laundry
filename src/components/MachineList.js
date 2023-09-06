import React from "react";
import MachineCard from "./MachineCard";

const MachineList = ({ machines }) => {
  return (
    <>
      <div
        className="container justify-content-center"
        style={{ width: "20rem" }}
      >
        {machines.map((machine) => (
          <MachineCard machine={machine} />
        ))}
      </div>
    </>
  );
};

export default MachineList;
