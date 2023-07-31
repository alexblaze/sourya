import { useContext } from "react";
import { UserContext } from "../../../context/user/UserContext";

const AdminDashboard = () => {
  const user = useContext(UserContext);
  console.log("🚀 ~ file: AdminDashboard.tsx:6 ~ AdminDashboard ~ user:", user);

  return <div>AdminDashboard</div>;
};

export default AdminDashboard;
