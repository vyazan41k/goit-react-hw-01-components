import React from "react";
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = (obj) => {
  return (
    <ul>
      {obj.friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          url={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
};

export default FriendList;
