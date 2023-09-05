import React from "react";
import MachineCard from "./MachineCard";

const MachineList = ({ machines }) => {
  // useEffect(() => {
  //   fetch("http://localhost:5000/machines", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setMachines(data);
  //     })
  //     .catch((err) => console.log(err));ss

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
