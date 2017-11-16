export const RESULTS_FETCHED_ERROR = 'RESULTS_FETCHED_ERROR';
export const NETWORK_ERROR = 'NETWORK_ERROR';

export function fetchPost({ dataUrl, data, dataAcquiredType, successCallBack, failCallBack, failSilently, headers }) {
	const resultsError = failSilently ? 'FAIL_SILENTLY' : RESULTS_FETCHED_ERROR;
	const networkError = failSilently ? 'FAIL_SILENTLY' : NETWORK_ERROR;

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
				if (payload.status === 200) {
					if (successCallBack) {
						successCallBack(payload);
					}
					dispatch({ type: dataAcquiredType, payload });
				} else {
					if (failCallBack) {
						failCallBack(payload.status);
					}
					dispatch({ type: resultsError, payload });
				}
			},
      error => {
				if (failCallBack) {
					failCallBack(error);
				}
				dispatch({ type: networkError, error });
			}
    );
}

export function fetchGet({ dataUrl, dataAcquiredType, successCallBack, headers }) {
	return dispatch => fetch(dataUrl, {
		method: 'GET',
		headers: headers || {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin'
	})
    .then(res => res.json())
    .then(
      payload => {
				if (payload.status === 200) {
					if (successCallBack) {
						successCallBack(payload);
					}
					dispatch({ type: dataAcquiredType, payload });
				} else {
					dispatch({ type: RESULTS_FETCHED_ERROR, payload });
				}
			},
      error => {
				dispatch({ type: NETWORK_ERROR, error });
			}
    );
}
