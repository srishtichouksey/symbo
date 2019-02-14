import baseUrl from '../shared/baseurl';
import * as ActionTypes from './ActionType';

export const fetchcontent = () => {
	return fetch(baseurl+'content')
		.then(response =>{
			if(response.ok){
				return response;
			} else {
				var error = new Error('Error'+response.status+':'+response.statusText);
				error.response = response;
				throw error;
			}
		}, error => {
			var Errmess = new Error(error.message);
			throw errmess;
		})
		.then(response => response.json())
		.then(content => dispatch(addContent(content)));
}

export const addContent=(content) = ({
	type: ActionTypes.ADD_DETAILS,
	payload: content
});