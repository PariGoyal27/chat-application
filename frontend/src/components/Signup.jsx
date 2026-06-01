import React from "react";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-2xl bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              className="w-full input input-bordered"
              type="text"
              placeholder="Fullname"
            />
          </div>
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
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              className="w-full input input-bordered"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center my-3">
            <div className="flex items-center">
              <p>Male:</p>
              <input type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>
            <div className="flex items-center">
              <p>Female:</p>
              <input type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>
          </div>
            <p className="text-center my-2">
              Already have an account?
              <Link className="text-blue-300" to="/login">
                &nbsp;Login
              </Link>
            </p>
          <div>
            <button className="btn btn-block btn-sm mt-2 btn-error">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
