import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const linkArr = ["home", "courses"];

  const linkStyle = {
    display: "inlineBlock",
    margin: "10px 15px",
    padding: "8px 12px",
    border: "2px solid gray ",
    borderRadious: "10px",
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
  };

  return (
    <div>
      {linkArr.map((link, index) => (
        <Link style={linkStyle} key={index} to={`/${link}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
