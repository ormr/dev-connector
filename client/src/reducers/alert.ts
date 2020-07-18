import { Reducer, AnyAction } from 'redux';
import { SET_ALERT, REMOVE_ALERT } from '../actions/constants';
import { Message, AlertActionTypes } from '../actions/constants'

interface IAction {
  type: string;
  payload?: AlertActionTypes
}

const initialState: Message[] = [

];

const alert: Reducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert: Message) => alert.id !== payload);
    default:
      return state;
  }
}

export {
  alert
};