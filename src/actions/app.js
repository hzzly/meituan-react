import * as appTypes from '../constains/app'

export function menu(data) {
	return {
		type: appTypes.MENU_UPDATE,
		data
	}
}

export function showTopBtn(status) {
	return {
		type: appTypes.SHOW_TOP_BTN,
		topBtnStatus: status
	}
}