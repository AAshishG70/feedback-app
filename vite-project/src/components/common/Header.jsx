import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({
  text = "Default",
  textColor = "purple",
  bgColor = "white",
}) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">{text}</div>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Header;
