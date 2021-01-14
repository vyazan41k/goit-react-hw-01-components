import React from "react";
import PropTypes from "prop-types";

const ProfileStats = ({ label, value, id }) => {
  return (
    <li key={id}>
      <span className="label">{label}</span>
      <span className="quantity">{value}</span>
    </li>
  );
};

ProfileStats.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
};

export default ProfileStats;
