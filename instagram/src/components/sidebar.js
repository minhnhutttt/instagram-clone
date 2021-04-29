import React from "react";
import useUSer from "../hooks/use-user";
function Sidebar() {
  const {
    user: { fullName, userName, userID },
  } = useUSer();
  return <div>Sidebar</div>;
}

export default Sidebar;
