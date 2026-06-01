import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-2xl bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              className="w-full input input-bordered"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              className="w-full input input-bordered"
              type="password"
              placeholder="password"
            />
          </div>
          <p className="text-center my-2">
            Don't have an account ?
            <Link className="text-blue-300" to="/register">
              &nbsp;Signup
            </Link>
          </p>
          <div>
            <button className="btn btn-block btn-sm mt-2 btn-error">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
