import * as uuid from 'uuid';
import { Dispatch } from 'redux';
import { Message, SET_ALERT, REMOVE_ALERT, AlertActionTypes } from './constants';

export const setAlert = (msg: string, alertType: string) => (dispatch: Dispatch<AlertActionTypes>) => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
}