import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({
  text = "Default",
  textColor = "black",
  bgColor = "brown",
}) => {
  const headerStyles = {
    backgroundColor: "lightblue",
    border: "1.5px dashed gray",
  };
  return (
    <header style={headerStyles}>
      <div className={styles.container}>{text} Header</div>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Header;
