import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-no-repeat bg-cover backgroundImage gap-y-5">
        <h2 className="text-5xl text-teal-900">Sign In</h2>
        <input
          type="text"
          className="px-3 py-2 text-white bg-teal-700 rounded-md w-52"
          placeholder="username"
        />
        <input
          type="text"
          className="px-3 py-2 text-white bg-teal-700 rounded-md w-52"
          placeholder="password"
        />
        <div className="flex flex-row justify-items-stretch gap-x-5">
          <label
            htmlFor="stay"
            className="flex flex-row justify-center align-middle gap-x-2"
          >
            <input type="checkbox" name="stay" id="stay" />
            Remember Me
          </label>
          <Link to={"/sign-up"}>Sign up?</Link>
        </div>
        <Link to={"/main-page"}>
          <button className="px-3 py-1 text-white bg-teal-900 rounded-md shadow w-52 ">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
