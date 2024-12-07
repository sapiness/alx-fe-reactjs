


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
const Profile = () => {
    const { id } = useParams();
  return (
    <Router>
      <div>
        <h1>Profile</h1>
        <ul>
          <li><Link to={`/users/${id}`}>Details</Link></li>
          <li><Link to={`/users/${id}/settings`}>Settings</Link></li>
        </ul>
        <Routes>
          <Route path="/users/:id" element={<ProfileDetails />} />
          <Route path="/users/:id/settings" element={<ProfileSettings />} />
          <Route index element={<p>Please select a profile section.</p>} />
        </Routes>
      </div>
    </Router>
  );
};
export default Profile;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
// import ProfileDetails from './ProfileDetails';
// import ProfileSettings from './ProfileSettings';
// const Profile = () => {
//     const {username } = useParams();
//   return (
//     <Router>
//       <div>
//         <h1>Profile</h1>
//         <ul>
//           <li><Link to={`/users/${username}`}>Details</Link></li>
//           <li><Link to={`/users/${username}/settings`}>Settings</Link></li>
//         </ul>
//         <Routes>
//           <Route path="/users/:username" element={<ProfileDetails />} />
//           <Route path="/users/:username/settings" element={<ProfileSettings />} />
//           <Route index element={<p>Please select a profile section.</p>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };
// export default Profile;