import React, { useState, useEffect} from "react";
import data from "./messages.json";
import { Link } from "react-router-dom";
import "./inbox.css";

const Inbox = () => {
  const [selectedData, setSelectedData] = useState([]);
  const [jsonData, setJsonData] = useState([]);
  

  useEffect(() => {
    setJsonData(data);
  }, []);

  const handleSelect = (item) => {
    if (selectedData.find((obj) => obj.id === item.id)) {
      setSelectedData(selectedData.filter((obj) => obj.id !== item.id));
    } else {
      setSelectedData([...selectedData, item]);
    }
  };

  return (
    <div className="container1">
      <div className="col-1">
        <h1>INBOX</h1>
        <p>You have: {jsonData.length} messages</p>
        <ul>
          {jsonData.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item)}
              style={{
                backgroundColor: selectedData.find((obj) => obj.id === item.id)
                  ? "lightgray"
                  : "white",
                cursor: "pointer"
              }}
            >
              {/* add an anchor tag around the list item and set its href attribute */}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <p>{item.name}</p>
                <p>{item.subject}</p>
              
              </a>
            </li>
          ))}
        </ul>
        <div className="messages">
          <div className="col-2">
            <strong>MESSAGE:</strong>
            <ul>
              {selectedData.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
            
          </div>
        </div>
            <Link to="/" className="dashbord">
              <button className="btn">Logout</button>
            </Link>
      </div>
    </div>
    
  );
};

export default Inbox;
