import * as userTypes from '../constains/userinfo'

let states = {
	cityName: '南昌'
}

// (function() {
//     if(localStorage.todos) {
//         todos = JSON.parse(localStorage.todos)
//     } else {
//         todos = []
//     }
// })()

export default function userinfo(state=states,action){
	switch(action.type) {
		case userTypes.USERINFO_UPDATE:
			return action.data;
		default:
			return state;
	}
}