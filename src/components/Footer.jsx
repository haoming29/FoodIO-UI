import React from "react";
import { useHistory } from "react-router";
import "./Footer.css";

const Footer = () => {
  const history = useHistory();
  return (
    <div className="footer">
      <div
        className="footer_logo-wrap"
        onClick={() => {
          history.push("/");
        }}
      >
        <img
          className="logo-footer"
          src={process.env.PUBLIC_URL + "logo-light.png"}
          alt="logo"
        ></img>
      </div>
      <div className="footer_sub-header">
        © Food.IO 2022 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
