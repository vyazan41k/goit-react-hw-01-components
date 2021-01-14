import React from "react";
import PropTypes from "prop-types";

const ProfileDesc = ({ url, name, tag, location }) => {
  return (
    <div className="description">
      <img src={url} alt="Аватар пользователя" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};

ProfileDesc.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ProfileDesc;
