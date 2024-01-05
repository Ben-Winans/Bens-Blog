import React from "react";
import { NavItem } from "./NavItem";
import "../styles/styles.css";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="frame">
        <div className="div-wrapper">
          <div className="text-wrapper">Ben Winans</div>
        </div>
        <div className="div">
          <NavItem
            active={false}
            className="nav-item-instance"
            navText="About"
          />
          <NavItem
            active={false}
            className="nav-item-instance"
            navText="Skills"
          />
          <NavItem
            active={false}
            className="nav-item-instance"
            navText="Projects"
          />
          <NavItem
            active={false}
            className="nav-item-instance"
            navText="Contact"
          />
        </div>
      </div>
    </div>
  );
};
