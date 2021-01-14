import React from "react";
import PropTypes from "prop-types";
import "./FriendListItem.css";

const FriendListItem = ({ isOnline, url, name }) => {
  const spanClasses = ["status_fr"];

  if (isOnline) {
    spanClasses.push("on");
  } else {
    spanClasses.push("off");
  }

  return (
    <li className="item_fr">
      <span className={spanClasses.join(" ")}>{isOnline}</span>
      <img className="avatar_fr" src={url} alt="" width="48" />
      <p className="name_fr">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
