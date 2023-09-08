import React from "react";
import MachineList from "../components/MachineList";
import { Link } from "react-router-dom";

const MachineListPage = ({ machines, updateStatus, showAlert }) => {
  const washingMachines = machines.filter((machine) => machine.kind === 1);
  const drierMachines = machines.filter((machine) => machine.kind === 2);

  return (
    <>
      <div className="container text-center mt-5">
        {showAlert && (
          <div class="alert alert-warning" role="alert">
            You don't have enough money, please add more.{" "}
            <Link to="/user" class="alert-link">
              Add Money
            </Link>
          </div>
        )}
        <div className="row">
          <div className="col">
            <div className="m-3">
              <h2>Washing Machine</h2>
            </div>
            <MachineList
              machines={washingMachines}
              updateStatus={updateStatus}
            />
          </div>
          <div className="col">
            <div className="m-3">
              <h2>Drier Machine</h2>
            </div>
            <MachineList machines={drierMachines} updateStatus={updateStatus} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MachineListPage;
