import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLinks.css";

const HeaderLinks = () => {
  return (
    <div className="headerlinks">
      <Link className="headerlinks__link" to="/appliances">
        Appliances
      </Link>
      <Link className="headerlinks__link" to="/beauty">
        Beauty & Personal Care
      </Link>
      <Link className="headerlinks__link" to="/electronics">
        Electronics
      </Link>
      <Link className="headerlinks__link" to="garden">
        Garden & Outdoor
      </Link>
      <Link className="headerlinks__link" to="kitchen">
        Home & Kitchen
      </Link>
      <Link className="headerlinks__link" to="office-products">
        Office Products
      </Link>
    </div>
  );
};

export default HeaderLinks;
