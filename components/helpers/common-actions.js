export const NETWORK_ERROR = 'NETWORK_ERROR';

export function fetchPost({ dataUrl, data, dataAcquiredType, successCallBack, failCallBack, headers }) {
	return dispatch => fetch(dataUrl, {
		method: 'POST',
		headers: headers || {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin',
		body: JSON.stringify(data)
	})
    .then(res => res.json())
    .then(
      payload => {
				if (successCallBack) {
					successCallBack(payload);
				}
				dispatch({ type: dataAcquiredType, payload });
			},
      error => {
				if (failCallBack) {
					failCallBack(error);
				}
				dispatch({ type: NETWORK_ERROR, error });
			}
    );
}

export function fetchGet({ dataUrl, dataAcquiredType, successCallBack, failCallBack }) {
	return dispatch => fetch(dataUrl, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(
      payload => {
				console.log(payload);
				if (successCallBack) {
					successCallBack(payload);
				}
				dispatch({ type: dataAcquiredType, payload });
			},
      error => {
				if (failCallBack) {
					failCallBack(error);
				}
				dispatch({ type: NETWORK_ERROR, error });
			}
    );
}
