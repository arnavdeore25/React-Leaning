import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
  },
});

export const getGithubUser = async (username) => {
  const response = await githubApi.get(`/users/${username}`);

  return response.data;
};