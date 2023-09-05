import kindMachine from "../img/laundryImg.jpeg";
import drier from "../img/drier.jpeg";
import { Link } from "react-router-dom";

const MachineCard = ({ machine }) => {
  return (
    <Link to="#" style={{ textDecoration: "none", color: "black" }}>
      <div className="card mb-5 text-decoration-none">
        <img
          src={machine.kind === 1 ? kindMachine : drier}
          className="card-img-top"
          alt="kindMachine"
        />
        <div className="card-body">
          <h5 className="card-title text-center mb-3 ">Number: {machine.id}</h5>
          <p className="card-text">
            If necessary add credit to the card to use.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Weight: {machine.weight}</li>
          <li className="list-group-item">Time: {machine.time}</li>
          <li className="list-group-item">Price: {machine.price}</li>
        </ul>
      </div>
    </Link>
  );
};

export default MachineCard;
