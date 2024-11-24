import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link, useParams } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
const Profile = () => {
  return (
    <Router>
        <Routes>
      <div>
        <h1>Profile</h1>
        <ul>
          <li><Link to="/profile/details">Details</Link></li>
          <li><Link to="/profile/settings">Settings</Link></li>
        </ul>
        <Switch>
        <Route>
          <Route path="/profile/details" component={ProfileDetails} />
          <Route path="/profile/settings" component={ProfileSettings} />
          </Route>
        </Switch>
       
      </div>
      </Routes>
    </Router>
  );
};

export default Profile;