import { EventEmitter } from 'events';
const { default: actionTypes } = require('../actions/actionTypes');
const { default: dispatcher } = require('../dispatcher/dispatcher');

const CHANGE = 'CHANGE';
let user;

class AuthStore extends EventEmitter {
	emitChange() {
		this.emit(CHANGE);
	}
	addChangeListener(callback) {
		this.onListener(CHANGE, callback);
	}
	removeChangeListener(callback) {
		this.removeListener(CHANGE, callback);
	}
	getUser() {
		return user;
	}
}

const authStore = new AuthStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.AUTH_LOGIN:
			user = action.payload;
			authStore.emitChange();
			break;

		case actionTypes.AUTH_SIGNOUT:
			user = null;
			authStore.emitChange();
			break;

		case actionTypes.AUTH_LOGIN_ERROR:
		case actionTypes.AUTH_SIGNOUT_ERROR:
		default:
			break;
	}
});

export default authStore;
