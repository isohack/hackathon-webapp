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
	//console.log(payload);
	return axios.post(config.BASE_URL+'/api/v1/account/login/', payload)
				.then(function (response) {
					console.log(response);

					if(response.status === 200){
						console.log("Login successfull");
						//return <Redirect to='/DashboardHome' />
						/* page redirect or load profile */
						return response;
					}
					else if(response.status === 204){
						 console.log("Username password do not match");
						 alert("username password do not match")
					}
					else{
						 console.log("Username does not exists");
						 alert("Username does not exist");
					}
				})
				.catch(function (error) {
					console.log(error);
				});
}