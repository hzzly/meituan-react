import * as userTypes from '../constains/userinfo'

export function update(data){
	return {
		type: userTypes.USERINFO_UPDATE,
		data
	}
}