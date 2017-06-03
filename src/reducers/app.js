import * as appTypes from '../constains/app'

let appState = {
	topBtnStatus: false,
	loadingStatus: false
}

export default function app(state=appState, action){
	switch(action.type) {
		case appTypes.MENU_UPDATE:
			return action.data;
		case appTypes.SHOW_TOP_BTN:
			return action.topBtnStatus;
		default:
			return state;
	}
}