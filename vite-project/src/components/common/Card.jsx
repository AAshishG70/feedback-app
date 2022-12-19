import React from "react";
import "./Card.module.css";

const Card = ({ children, bgColor = "red" }) => {
  return <div style={{ backgroundColor: bgColor }}>{childern}</div>;
};

export default Card;
