import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ text = "Default text" }) => {
  return (
    <header>
      <div className={styles.container}>{text} Header</div>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
