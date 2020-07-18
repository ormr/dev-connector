import { SET_ALERT, REMOVE_ALERT } from '../actions/constants';
import { Message, AlertActionTypes } from '../actions/constants'

const initialState: Message[] = [

];

const alert = (state = initialState, action: any) => {
  const { type, payload } = action;
  
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}

export {
  alert
};