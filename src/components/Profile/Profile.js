import React from 'react';
import user from './user.json';
import ProfileDesc from './ProfileDesc/ProfileDesc';
import ProfileStats from './ProfileStats/ProfileStats';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileDesc
        url={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
      />
      <ul className="stats">
        {Object.entries(user.stats).map(([i, value, index]) => (
          <ProfileStats label={i} value={value} id={index} />
        ))}
      </ul>
    </div>
  );
};

export default Profile;
