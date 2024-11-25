// import React from 'react';
// import { useParams } from 'react-router-dom';
// const ProfileSettings = () => {
//   const { id } = useParams();
//   return (
//     <div>
//       <h2>Profile Settings for {id}</h2>
//       <p>This is the profile settings page for {id}.</p>
//     </div>
//   );
// };
// export default ProfileSettings;

import React from 'react';
import { useParams } from 'react-router-dom';
const ProfileSettings = () => {
  const { username } = useParams();
  return (
    <div>
      <h2>Profile Settings for {username}</h2>
      <p>This is the profile settings page for {username}.</p>
    </div>
  );
};
export default ProfileSettings;
