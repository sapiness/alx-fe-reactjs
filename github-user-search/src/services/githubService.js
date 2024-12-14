import axios from 'axios';
const githubService = {
  fetchUserData: async (username) => {
    const response = await axios.get('https://api.github.com');
    return response.data;
  },
};
export default githubService;