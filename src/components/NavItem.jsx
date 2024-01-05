import PropTypes from "prop-types";
import React from "react";
import "../styles/styles.css";

export const NavItem = ({ navText , active, className }) => {
  return (
    <div className={`nav-item ${className}`}>
      <div className={`about active-${active}`}>{navText}</div>
    </div>
  );
};

NavItem.propTypes = {
  navText: PropTypes.string,
  active: PropTypes.bool,
};
