import { SyntheticEventData } from 'react-dom/test-utils';
import baseAxios from '../api/baseAxios';
import { SyntheticEvent } from 'react';
import { NavigateFunction } from 'react-router-dom';
import SignIn from '../pages/SignIn';

interface handleSignUpTypes {
  username: string;
  password: string;
  email: string;
}

interface handleSignInType {
  usernameOrEmail: string;
  password: string;
}

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
          console.log(data.message);
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
  navigate: NavigateFunction
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
          console.log(res.data.message);
          navigate('/main-page');
          return;
        }
        console.log(res.data.error);
      });
  }
};
