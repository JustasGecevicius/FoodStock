import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { handleSignIn } from '../../functions/authentication';
import { useAppDispatch } from '../../store/hooks';

export default function SignIn() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className='w-screen h-screen'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn({ usernameOrEmail, password }, navigate, dispatch);
        }}>
        <div className='flex flex-col items-center justify-center w-screen h-screen bg-no-repeat bg-cover backgroundImage gap-y-5'>
          <h2 className='text-5xl text-teal-900'>Sign In</h2>
          <input
            type='text'
            className='px-3 py-2 text-white bg-teal-700 rounded-md w-52'
            placeholder='username'
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            value={usernameOrEmail}
          />
          <input
            type='text'
            className='px-3 py-2 text-white bg-teal-700 rounded-md w-52'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className='flex flex-row justify-items-stretch gap-x-5'>
            <label
              htmlFor='stay'
              className='flex flex-row justify-center align-middle gap-x-2'>
              <input type='checkbox' name='stay' id='stay' />
              Remember Me
            </label>
            <Link to={'/sign-up'}>Sign up?</Link>
          </div>
          <button className='px-3 py-1 text-white bg-teal-900 rounded-md shadow w-52 '>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
