

import React, { useState, useEffect } from "react";
import { useUserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import data from "./messages.json"

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();

  const [jsonLength, setJsonLength] = useState(0);

  useEffect(() => {
    setJsonLength(data.length);
  }, []);

  return (
    <div className="cover">
      <h1>WELCOME : {user.displayName} </h1>
          <div className="notfication">
            <p>You have: {jsonLength} Messages</p>
          </div>
      <Link to="/Inbox" className="toInbox">
            <button className="btn">View INBOX</button>
      </Link>
      <button onClick={logoutUser}>Log out</button>
    </div>
  );
};

export default Dashboard;