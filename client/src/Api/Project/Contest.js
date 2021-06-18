import axios from 'axios';

export const UserContestAPI = (userId) => {
  const usercontest = axios.get(`/contests/user/contestlist/${userId}`);
  console.log(usercontest);
  return usercontest;
};
