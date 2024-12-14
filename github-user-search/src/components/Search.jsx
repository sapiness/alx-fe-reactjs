import React, { useState } from 'react';
import githubService from '../services/githubService';
function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
        const data = await githubService.fetchUserData('https://api.github.com/users/{username}');
        setUserData(data);
        setError(null);
    } catch (error) {
        setError("Looks like we cant find the user");
        setUserData(null);
    } finally {
        setLoading(false);
    }
}
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : userData ? (
        <div>
          <img src={userData.avatar_url} alt={userData.name} />
          <h2>{userData.name}</h2>
          <p>
            <a href={userData.html_url} target="_blank">View Profile</a>
          </p>
          <h3 className="login">@username</h3>
        </div>
      ) : null}
    </div>
  );
}
export default Search;