import { useAppDispatch } from './../store/hooks';
import baseAxios from '../api/baseAxios';
import { NavigateFunction } from 'react-router-dom';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { UserState, change } from '../pages/signIn/slice';
interface handleSignUpTypes {
  username: string;
  password: string;
  email: string;
}

interface handleSignInType {
  usernameOrEmail: string;
  password: string;
}

type dispatchType = ThunkDispatch<
  {
    user: UserState;
  },
  undefined,
  AnyAction
> &
  Dispatch<AnyAction>;

export const handleSignUp = (
  { username, password, email }: handleSignUpTypes,
  navigate: NavigateFunction
) => {
  console.log(username, email, password);
  if (username && password && email) {
    console.log('handle');
    baseAxios
      .post('api/auth/signup', { username, password, email })
      .then(({ data }) => {
        if (!data.error) {
          navigate('/main-page', { replace: true });
          return;
        }
        console.log(data.error);
      })
      .catch((error) => console.log(error));
  }
};

export const handleSignIn = (
  { usernameOrEmail, password }: handleSignInType,
  navigate: NavigateFunction,
  dispatch: dispatchType
) => {
  if (usernameOrEmail && password) {
    console.log('SignIn');
    baseAxios
      .post(
        'api/auth/signin',
        { usernameOrEmail, password },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        if (!res.data.error) {
          dispatch(change({ id: res.data.id }));
          navigate('/main-page');
          return;
        }
        console.log(res.data.error);
      });
  }
};
