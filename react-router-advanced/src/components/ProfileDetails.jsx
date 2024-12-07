

import React from 'react';
import { useParams } from 'react-router-dom';
const ProfileDetails = () => {
  const { username } = useParams();
  return (
    <div>
      <h2>Profile Details for {username}</h2>
      <p>This is the profile details page for {username}.</p>
    </div>
  );
};
export default ProfileDetails;