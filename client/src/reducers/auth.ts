import { Reducer, AnyAction } from 'redux';
import { AuthState, REGISTER_SUCCESS, REGISTER_FAIL, AuthActionTypes } from '../actions/constants';

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isAuthenicated: null,
  loading: true,
  user: null
};

export const auth: Reducer = (state = initialState, action: AnyAction): AuthState => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenicated: true,
        loading: false
      }
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenicated: false,
        loading: false
      }
    default:
      return state;
  }
}