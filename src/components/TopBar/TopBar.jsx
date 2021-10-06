import React from "react";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Headroom>
      <div>
        <Link to="/">Rate Noods</Link>
      </div>

      <div>
        <Link to="/upgrades">Upgrades</Link>
        <Link to="/about">About</Link>
      </div>
    </Headroom>
  );
};

export default TopBar;
