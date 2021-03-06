const skylabObject = {
	map: (object, fn) => {
		let newObject = {};
		for (let property in object) {
			if (property !== 'length' && object.hasOwnProperty(property)) {
				newObject[property] = fn(object[property]);
			}
		}
		newObject.length = object.length;
		return newObject;
	},

	filter: (object, fn) => {
		let newObject = {};
		for (let property in object) {
			if (
				fn(object[property]) &&
				property !== 'length' &&
				object.hasOwnProperty(property)
			) {
				newObject[property] = object[property];
			}
		}
		return newObject;
	},

	find: (object, fn) => {
		for (let property in object) {
			if (fn(object[property])) {
				return object[property];
			}
		}
	},

	findIndex: (object, fn) => {
		let i = 0;
		for (let property in object) {
			if (fn(object[property])) {
				return i;
			}
			i++;
		}
		return -1;
	},

	fill: (object, value, start = 0, end = object.length) => {
		let newObj = {};
		newObj.length = object.length;
		for (let property in object) {
			if (
				(property < start || property >= end) &&
				property !== 'length' &&
				object.hasOwnProperty(property)
			) {
				newObj[property] = object[property];
			} else if (
				property >= start &&
				property < end &&
				property !== 'length' &&
				object.hasOwnProperty(property)
			) {
				newObj[property] = value;
			}
		}
		return newObj;
	},

	some: (object, fn) => {
		for (let property in object) {
			if (fn(object[property]) && object.hasOwnProperty(property)) {
				return true;
			}
		}
		return false;
	},

	every: (object, fn) => {
		for (let property in object) {
			if (
				!fn(object[property]) &&
				property !== 'length' &&
				object.hasOwnProperty(property)
			) {
				return false;
			}
		}
		return true;
	},

	reduce: (object, fn, rest = 0) => {
		let accumulator = 0;
		!rest ? (accumulator = 0) : (accumulator = rest);
		for (property in object) {
			if (object.hasOwnProperty(property) && property !== 'length')
				accumulator = fn(accumulator, object[property]);
		}
		return accumulator;
	},

	copyWithin: function (
		object,
		value,
		start = 0,
		end = Object.entries(object).length
	) {
		if (value >= Object.entries(object).length) {
			return;
		}
		let newObj = {};
		for (let i = start; i < end; i++) {
			newObj[i] = Object.entries(object)[i][1];
		}
		for (let i = 0; i < Object.entries(newObj).length; i++) {
			if (!object[value + i]) {
				return arr;
			}
			object[value + i] = Object.entries(newObj)[i][1];
		}
		return object;
	},
};

const ferranObject = { __proto__: skylabObject, 0: 1, 1: 1, 2: 3, length: 3 };

module.exports = ferranObject;
