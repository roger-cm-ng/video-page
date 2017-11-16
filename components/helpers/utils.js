import queryString from 'simple-query-string';
import _ from 'lodash';
import commaIt from 'comma-it';

export function handleDefaults(defaultObj, dynamicObj) {
	for (const key in dynamicObj) {
		defaultObj[key] = dynamicObj[key];
	}

	return defaultObj;
}

export function getPosition({ settings, success, fail }) {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				resolve(position);
				success(position);
			},
			(error) => {
				reject(error);
				fail();
			},
			settings
		);
  });
}

export function convertQueryStringToJson() {
	return queryString.parse(location.search);
}

export function convertMinToTime(minutes) {
	let hour = String(Math.floor(minutes / 60));
	let min = String(minutes % 60);
	if (hour.length === 1) {
		hour = `0${hour}`;
	}
	if (min.length === 1) {
		min = `0${min}`;
	}
	return `${hour}:${min}`;
}

export function dedupe(flights, keyMap, valMap) {
	const subjectObj = {};
	const finalArr = [];
	const cloned = _.clone(flights);
	const mapped = cloned.map((flight) => {
		const o = {};
		let notation = flight;
		valMap.map((val) => {
			notation = notation[val];
			return val;
		});
		o[keyMap] = notation;
		o.price = flight.pricePoint.price;
		o.checked = false;
		return o;
	});

	_.sortBy(_.uniqBy(mapped, keyMap), keyMap).map((obj) => {
		subjectObj[`count${obj[keyMap]}`] = [];
		subjectObj[`count${obj[keyMap]}`] = mapped.filter((itemObj) => {
			if (itemObj[keyMap] !== obj[keyMap]) {
				return false;
			}
			return itemObj;
		});
		return obj;
	});

	for (const key in subjectObj) {
		finalArr.push(_.minBy(subjectObj[key], 'price'));
	}

	return finalArr;
}

export function checkbox(state, ind) {
	const cloned = _.clone(state);
	if (cloned[ind].checked) {
		cloned[ind].checked = false;
	} else {
		cloned[ind].checked = true;
	}
	return cloned;
}

function random() {
		return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
}

export function guid() {
    return `${random()}${random()}-${random()}-${random()}-${random()}-${random()}${random()}${random()}`;
}

export function roundFloat(val) {
  return parseFloat(Math.round(val * 100) / 100).toFixed(2);
}

export function generateDayDropdown() {
	return [...Array(31)].map((item, ind) => ({ lab: ind + 1, val: ind + 1 }));
}

export function generateYearDropdown(num, type) {
	const currentYear = new Date().getFullYear();
	let arr;

	if (type === 'minus') {
		arr = [...Array(num)].map((item, ind) => ({ lab: currentYear - ind, val: currentYear - ind }));
	} else {
		arr = [...Array(num)].map((item, ind) => ({ lab: currentYear + ind, val: currentYear + ind }));
	}

	return arr;
}

export function calculateGst(grandTotal, percentage) {
    return (grandTotal / (100 + percentage) * percentage).toFixed(2);
}

export function numberToPrice(num) {
	let price = String(num);
	if (!/\./ig.test(String(num))) {
		price = `${String(num)}.00`;
	} else if (String(num).split('.')[1].length === 1) {
		price = `${String(num)}0`;
	}
	return commaIt(price, { addPrecision: true, thousandSeperator: ',', decimalSeperator: '.' });
}

export function stringToNumber(str) {
	return Number(str.replace(/,/ig, ''));
}

export function sortStatesFromCountry(states, code) {
	const cloned = _.clone(states).filter((item) => (item.countryIsoCode === code));
	return cloned.map((item) => ({ lab: item.name, val: item.longStateCode }));
}

export function dashify(str) {
	return str.toLowerCase().replace(' ', '-');
}

export function removeHoldingScreen(elmStr = '.js-holding-screen') {
	const elm = document.querySelector(elmStr);
  try {
    elm.parentElement.removeChild(elm);
  } catch (err) {
		// console.log(err);
  }
}

export function rawFetchGet({ dataUrl, successCallBack }) {
	fetch(dataUrl, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin'
	})
  .then(res => res.json())
  .then(
    payload => {
			successCallBack(payload);
		},
    () => {
			// console.log(error);
		}
  );
}

export function arrayNumberDropdown(num, offset = 0) {
	return [...new Array(num)].map((val, ind) => ({ lab: String(ind + offset), val: String(ind + offset) }));
}
