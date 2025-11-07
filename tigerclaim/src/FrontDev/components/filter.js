import React from "react";
import "../../styles/filter.css";

const Filters = () => {
  return (
    <div className="filters">
      <select className="filter-dropdown">
        <option value="">Category</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="accessories">Accessories</option>
      </select>

      <select className="filter-dropdown">
        <option value="">Location</option>
        <option value="union">Student Union</option>
        <option value="library">Middleton Library</option>
        <option value="quad">The Quad</option>
      </select>

      <select className="filter-dropdown">
        <option value="">Date</option>
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
      </select>
    </div>
  );
};

export default Filters;
