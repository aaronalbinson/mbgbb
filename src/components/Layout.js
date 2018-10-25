import React from "react";
import Helmet from "react-helmet";
import logo from "../img/logo.svg";
import { Link } from "gatsby";

import Navbar from "../components/Navbar";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <div id="outer-container">
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div id="page-wrap">
      <div className="top">
        <Link to="/">
          <img
            src={logo}
            alt="Tunnel Ridge Outlook"
            style={{ width: "300px" }}
          />
        </Link>
      </div>
      {children}
    </div>
  </div>
);

export default TemplateWrapper;
