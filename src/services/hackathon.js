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

export const getToken = payload => {
	return axios.post(config.BASE_URL+'/api/v1/account/login/', payload)
				.then(function (response) {
					//console.log(response);
					if(response.status === 200){
						return {status:response.status, token:response.data.token};
					}
					else if(response.status === 204){
						 return {status:response.status};
					}
					else{
						return {status:404};
					}
				})
				.catch(function (error) {
					throw error;
				});
}