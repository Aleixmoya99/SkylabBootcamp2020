function cloningObjects(object) {
	let cloningObject = {};
	let property;
	if (!object) {
		return object
	}
	for (property in object) {
		if (typeof object[property] === 'object') {
			cloningObject[property] = cloningObjects(object[property]);
		} else {
			cloningObject[property] = object[property];
		}
	}
	return cloningObject;
}

module.exports=cloningObjects;