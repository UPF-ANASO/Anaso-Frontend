import { instance } from '../Server';
import axios from 'axios';

export const ContestListAPI = () => {
  const contestlist = axios.get('contests/lists');
  return contestlist;
};
