import Balance from "../components/Balance";
import MachineListPage from "./MachineListPage";

const UserPage = ({
  addMoney,
  userBalance,
  updateStatus,
  machines,
  statusMachine,
}) => {
  return (
    <>
      <div>
        <Balance userBalance={userBalance} addMoney={addMoney} />
      </div>
      <div>
        <MachineListPage machines={machines} updateStatus={updateStatus} />
      </div>
    </>
  );
};
export default UserPage;
