// import axios from 'axios';
// const githubService = {
//   fetchUserData: async (username) => {
//     const response = await axios.get('https://api.github.com');
//     return response.data;
//   },
// };
// export default githubService;

import axios from 'axios';
const githubService = {
  fetchAdvancedUserData: async (query, location, minRepos) => {
    const url = `("https://api.github.com/search/users?q"):>=${minRepos}+${query}`;
    const response = await axios.get(url);
    return response.data;
  },
};
export default githubService;