export const SET_ALERT: string = 'SET_ALERT';
export const REMOVE_ALERT: string = 'REMOVE_ALERT';
export const REGISTER_SUCCESS: string = 'REGISTER_SUCCESS';
export const REGISTER_FAIL: string = 'REGISTER_FAIL'

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