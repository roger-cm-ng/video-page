import _ from 'lodash';
import iterator from 'object-recursive-iterator';

export default class ValidationRules {
	static rules = {
		empty: {
			regex: /^\s*\S+.*/,
			errorMsg: 'This field is mandatory'
		},
		email: {
			regex: /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?\s*$/i,
			errorMsg: 'A valid email is required'
		},
		numbersOnly: {
			regex: /^\d+$/,
			errorMsg: 'Please enter numbers only'
		}
	}

	static validate({ cloned, ticket, value }) {
		_.set(cloned, `${ticket}.content`, value);
		const validationType = _.get(cloned, `${ticket}.validationType`);
		validationType.some(
			(type) => {
				let bool = false;
				if (!this.rules[type].regex.test(value)) {
					_.set(cloned, `${ticket}.errorMsg`, this.rules[type].errorMsg);
					_.set(cloned, `${ticket}.isValid`, false);
					bool = true;
				} else {
					_.set(cloned, `${ticket}.errorMsg`, '');
					_.set(cloned, `${ticket}.isValid`, true);
					bool = false;
				}
				return bool;
			}
		);
		return cloned;
	}

	static validateAll({ cloned }) {
		iterator.forAll(cloned, (path, key, obj) => {
			if (key === 'isValid' && !obj[key]) {
				const validationPath = [...path, 'validationType'];
				const validationType = _.get(cloned, validationPath);
				validationType.some(
					(type) => {
						const errPath = [...path, 'errorMsg'];
						const isValidPath = [...path, 'isValid'];
						const contentPath = [...path, 'content'];
						const content = _.get(cloned, contentPath);
						if (!this.rules[type].regex.test(content)) {
							_.set(cloned, errPath, this.rules[type].errorMsg);
							_.set(cloned, isValidPath, false);
						}
						return type;
					}
				);
			}
		});
		return cloned;
	}
}
