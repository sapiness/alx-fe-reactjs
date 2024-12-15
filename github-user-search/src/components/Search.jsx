// import React, { useState } from 'react';
// import githubService from '../services/githubService';
// function Search() {
//   const [username, setUsername] = useState('');
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     try {
//         const data = await githubService.fetchUserData('https://api.github.com/users/{username}');
//         setUserData(data);
//         setError(null);
//     } catch (error) {
//         setError("Looks like we cant find the user");
//         setUserData(null);
//     } finally {
//         setLoading(false);
//     }
// }
    
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//           placeholder="Enter GitHub username"
//         />
//         <button type="submit">Search</button>
//       </form>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p style={{ color: 'red' }}>{error}</p>
//       ) : userData ? (
//         <div>
//           <img src={userData.avatar_url} alt={userData.name} />
//           <h2>{userData.name}</h2>
//           <p>
//             <a href={userData.html_url} target="_blank">View Profile</a>
//           </p>
//           <h3 className="login">@username</h3>
//         </div>
//       ) : null}
//     </div>
//   );
// }
// export default Search;

// import React, { useState } from 'react';
// import githubService from '../services/githubService';
// function Search() {
//   const [username, setUsername] = useState('');
//   const [location, setLocation] = useState('');
//   const [minRepos, setMinRepos] = useState('');
//   const [userData, setUserData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     try {
//       const query = `repos:>=${minRepos}+location:${location}+${username}`;
//       const data = await githubService.fetchAdvancedUserData(query);
//       setUserData(data.items);
//       setError(null);
//     } catch (error) {
//       setError("Looks like we cant find the user");
//       setUserData([]);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
//       <h2 className="text-lg font-bold mb-4">Search GitHub Users</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-wrap mb-4">
//           <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//               Username
//             </label>
//             <input
//               className="block w-full p-2 border rounded"
//               type="text"
//               id="username"
//               value={username}
//               onChange={(event) => setUsername(event.target.value)}
//             />
//           </div>
//           <div className="w-full md:w-1/2 md:pl-2">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
//               Location
//             </label>
//             <input
//               className="block w-full p-2 border rounded"
//               type="text"
//               id="location"
//               value={location}
//               onChange={(event) => setLocation(event.target.value)}
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minRepos">
//             Minimum Repositories
//           </label>
//           <input
//             className="block w-full p-2 border rounded"
//             type="number"
//             id="minRepos"
//             value={minRepos}
//             onChange={(event) => setMinRepos(event.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Search
//         </button>
//       </form>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p style={{ color: 'red' }}>{error}</p>
//       ) : (
//         <ul>
//           {userData && userData.map((user) => (
//             <li key={('https://api.github.com/users/{username}')}>
//               <img src={user.avatar_url} alt={user.login} />
//               <h2>{user.login}</h2>
//               <p>Location: {user.location}</p>
//               <p>Repositories: {user.public_repos}</p>
//               <p>
//                 <a href={user.html_url} target="_blank">View Profile</a>
//                 <h3 className="login">@username</h3>
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
// export default Search;



import React, { useState } from 'react';
import githubService from '../services/githubService';
function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await githubService.fetchAdvancedUserData(username, location, minRepos);
      setUserData(data.items);
      setError(null);
    } catch (error) {
      setError("Looks like we can't find the user");
      setUserData([]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Search GitHub Users</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="block w-full p-2 border rounded"
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              className="block w-full p-2 border rounded"
              type="text"
              id="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minRepos">
            Minimum Repositories
          </label>
          <input
            className="block w-full p-2 border rounded"
            type="number"
            id="minRepos"
            value={minRepos}
            onChange={(event) => setMinRepos(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {userData && userData.map((user) => (
            <li key={('https://api.github.com/users/{username}')}>
              <img src={user.avatar_url} alt={user.login} />
              <h2>{user.login}</h2>
              <p>Location: {user.location}</p>
              <p>Repositories: {user.public_repos}</p>
              <p>
                <a href={user.html_url} target="_blank">View Profile</a>
                <h3 className="login">@username</h3>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Search;