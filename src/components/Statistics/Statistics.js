import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  if (title === "") {
    return (
      <section className="statistics">
        <ul className="stat-list">
          {stats.map((i) => (
            <li className="item" key={i.id}>
              <span className="label">{i.label}</span>
              <span className="percentage">{i.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  } else {
    return (
      <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
          {stats.map((i) => (
            <li className="item" key={i.id}>
              <span className="label">{i.label}</span>
              <span className="percentage">{i.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
