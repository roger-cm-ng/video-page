export const WEATHER_DATA_ACQUIRED = 'WEATHER_DATA_ACQUIRED';
export const NO_DATA_ACTIVATED = 'NO_DATA_ACTIVATED';
export const NETWORK_ERROR = 'NETWORK_ERROR';

export function activateNoData() {
  return {
    type: NO_DATA_ACTIVATED,
    bool: true
  };
}

export function fetchGet({ dataUrl, dataAcquiredType, successCallBack, failCallBack }) {
	return dispatch => fetch(dataUrl, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(
      payload => {
				if (payload.cod === 200) {
          if (successCallBack) {
            successCallBack(payload);
          }
          dispatch({ type: dataAcquiredType, payload });
        } else {
          if (failCallBack) {
            failCallBack();
          }
          dispatch({ type: NETWORK_ERROR });
        }
			},
      error => {
				if (failCallBack) {
					failCallBack(error);
				}
        dispatch({ type: NETWORK_ERROR, error });
			}
    );
}
