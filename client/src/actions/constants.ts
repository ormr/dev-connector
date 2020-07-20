export const SET_ALERT: string = 'SET_ALERT';
export const REMOVE_ALERT: string = 'REMOVE_ALERT';
export const REGISTER_SUCCESS: string = 'REGISTER_SUCCESS';
export const REGISTER_FAIL: string = 'REGISTER_FAIL'

// Alert reducer

export interface Message {
	msg: string;
	alertType: string;
	id: string;
}

interface setAlertAction {
	type: typeof SET_ALERT;
	payload: Message
}

interface removeAlertAction {
	type: typeof REMOVE_ALERT;
	payload?: string;
}

export type AlertActionTypes = setAlertAction | removeAlertAction;

// Auth reducer

export interface AuthState {
  token: null | string;
  isAuthenicated: boolean | null;
  loading: boolean;
  user: any;
}

interface registerSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: AuthState;
}

interface registerFailAction {
  type: typeof REGISTER_FAIL;
  payload?: AuthState;
}

export type AuthActionTypes = registerSuccessAction | registerFailAction;