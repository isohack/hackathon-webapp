import axios from 'axios';
import {config} from '../constants';

export const getAppStatus = payload => {
  return axios.get(config.BASE_URL + '/api/v1/hackathon/status/', {}).then((res) => {
      return res.data.status;
    }
  ).catch((error) => {
    throw error;
  });
};