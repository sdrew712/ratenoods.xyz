import React from "react";
import Headroom from "react-headroom";
import { NavLink } from "react-router-dom";
import "./top-bar.css";

const TopBar = () => {
  return (
    <Headroom>
      <div className="top-bar">
        <div>
          <NavLink to="/" id="site-title" exact activeClassName="active">
            Rate Noods
          </NavLink>
        </div>

        <div>
          <NavLink to="/upgrades" className="nav-link" activeClassName="active">
            Upgrades
          </NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
        </div>
      </div>
    </Headroom>
  );
};

export default TopBar;
