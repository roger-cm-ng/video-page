import { edit } from './edit-form-data';
import { EDIT_FORM_DATA_CHANGED, ALL_ERROR_MSGS_ACTIVATED, EDIT_FORM_DATA_RESET } from './edit-actions';
import _ from 'lodash';
import ValidationRules from '../../helpers/validation-rules';

export default function (state = _.clone(edit()), action) {
  switch (action.type) {
    case EDIT_FORM_DATA_CHANGED: {
      return ValidationRules.validate({
        cloned: _.clone(state),
        ticket: action.payload.ticket,
        value: action.payload.value
      });
    }

    case ALL_ERROR_MSGS_ACTIVATED: {
      return ValidationRules.validateAll({
        cloned: _.clone(state)
      });
    }

    case EDIT_FORM_DATA_RESET: {
      return _.clone(edit());
    }
		default:
	}

  return state;
}
