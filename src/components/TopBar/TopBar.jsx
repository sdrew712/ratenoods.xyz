import React from "react";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import "./top-bar.css";

const TopBar = () => {
  return (
    <Headroom>
      <div className="top-bar">
        <div>
          <Link to="/" id="site-title">
            Rate Noods
          </Link>
        </div>

        <div>
          <Link to="/upgrades" className="nav-link">
            Upgrades
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
      </div>
    </Headroom>
  );
};

export default TopBar;
