import UnJQ from 'unjq-ajax';

export function handleDefaults(defaultObj, dynamicObj) {
	for (const key in dynamicObj) {
		defaultObj[key] = dynamicObj[key];
	}

	return defaultObj;
}

export function getPosition(settings) {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				resolve(position);
				return position;
			},
			(error) => {
				reject(error);
			},
			settings
		);
  });
}

export function ajaxPromise(dataUrl, data) {
	return new Promise((resolve) => {
		UnJQ.post(dataUrl,
			data,
			(resp) => {
				resolve(resp);
			},
			'json');
	});
}
