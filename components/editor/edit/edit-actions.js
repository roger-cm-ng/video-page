export const EDIT_FORM_DATA_CHANGED = 'EDIT_FORM_DATA_CHANGED';
export const ALL_ERROR_MSGS_ACTIVATED = 'ALL_ERROR_MSGS_ACTIVATED';
export const EDIT_FORM_DATA_RESET = 'EDIT_FORM_DATA_RESET';

export function changeEditFormData(ticket, value) {
  return {
    type: EDIT_FORM_DATA_CHANGED,
    payload: {
      ticket,
      value
    }
  };
}

export function activateAllErrorMsgs() {
  return {
    type: ALL_ERROR_MSGS_ACTIVATED
  };
}

export function resetEditFormData() {
  return {
    type: EDIT_FORM_DATA_RESET
  };
}
