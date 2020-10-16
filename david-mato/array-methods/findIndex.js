function findIndex(callback, arr) {
	for (let i = 0; i < Object.entries(arr).length; i++) {
		if (callback(Object.entries(arr)[i][1])) {
			return i;
		}
	}
	return -1;
}

module.exports = findIndex;
