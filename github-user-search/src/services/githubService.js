import axios from 'axios';
const githubService = {
  fetchUserData: async (username) => {
    const response = await axios.get(username);
    return response.data;
  },
};
export default githubService;