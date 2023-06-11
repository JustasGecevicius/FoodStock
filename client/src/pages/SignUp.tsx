import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleSignUp } from '../functions/authentication';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  return (
    <div className='w-screen h-screen'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp({ username, password, email }, navigate);
        }}>
        <div className='flex flex-col items-center justify-center w-screen h-screen bg-no-repeat bg-cover backgroundImage gap-y-5'>
          <h2 className='text-5xl text-teal-900'>Sign Up</h2>
          <p className='text-teal-900'>Sign up and start managing your stock!</p>
          <input
            type='email'
            className='px-3 py-2 text-white bg-teal-700 rounded-md w-52'
            placeholder='e-mail'
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type='text'
            className='px-3 py-2 text-white bg-teal-700 rounded-md w-52'
            placeholder='username'
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type='password'
            className='px-3 py-2 text-white bg-teal-700 rounded-md w-52'
            placeholder='password'
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete='current-password'
          />
          <div className='flex flex-row justify-items-stretch gap-x-5'>
            <label
              htmlFor='stay'
              className='flex flex-row justify-center align-middle gap-x-2'>
              <input type='checkbox' name='stay' id='stay' />
              Remember Me
            </label>
            <Link to={'/sign-in'}>Sign in?</Link>
          </div>
          <button className='px-3 py-1 text-white bg-teal-900 rounded-md shadow w-52 '>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
