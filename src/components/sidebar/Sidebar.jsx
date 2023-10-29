import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Sidebar = () => {
  const [isOpen, setisOpen] = useState(true);

  function tabToggler() {
    setisOpen(!isOpen);
  }

  return (
    <div className="sidebar" style={{ width: isOpen ? "200px" : "100px" }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
        </ul>
        <Button color="primary" onClick={tabToggler} id="toggleButton">
          Toggle
        </Button>
      </nav>
    </div>
  );
};

export default Sidebar;
