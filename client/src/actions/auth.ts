import {api} from '../utils/api';
import { Dispatch } from 'redux';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL, AuthActionTypes } from './constants';

// Register User

interface Props {
  name: string;
  email: string;
  password: string;
}

const register = ({ name, email, password }: Props) => async (dispatch: any) => {
  try {
    const res = await api.post('/users', { name, email, password });

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: any) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};


export {
  register
};


/*const register = ({ name, email, password }: Props) => 
  async (dispatch: any) => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ name, email, password });

   try {
     const res = await axios.post('/api/users', body, config);

     dispatch({
       type: REGISTER_SUCCESS,
       payload: res.data
     });
   } catch (err) {
     const errors = err.response.data.errors;

     if (errors) {
       errors.forEach((error: any) => dispatch(setAlert(error.msg, 'danger')))
     }

     dispatch({
       type: REGISTER_FAIL
     });
   }
}*/