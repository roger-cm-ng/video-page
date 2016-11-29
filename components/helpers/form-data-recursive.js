import iterator from 'object-recursive-iterator';
import _ from 'lodash';

export default class FormDataRecursive {
	static check(data) {
		let bool = true;
		iterator.forAll(data, (path, key, obj) => {
			if (key === 'isValid' && !obj[key]) {
				bool = false;
			}
		});
		return bool;
	}

	static only(data, arr) {
		const finalArr = {};

		if (arr[0] === 'all') {
			return data;
		}

		for (const key in data) {
			arr.map((val) => {
				if (key === val) {
					finalArr[key] = data[key];
				}
				return val;
			});
		}

		return finalArr;
	}

	static recurseClean(data) {
		const cleaned = {};
		iterator.forAll(data, (path, key, obj) => {
			if (key === 'content') {
				_.set(cleaned, path, obj[key]);
			}
		});
		return cleaned;
	}
}
