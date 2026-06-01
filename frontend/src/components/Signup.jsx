import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // so the page don't get reloaded
    try {
      console.log(user);
      const res = await axios.post(
        `http://localhost:8080/api/v1/user/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      // console.log(res);
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    // after submitting fields will get empty by the following
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-2xl bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
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
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
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
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              className="w-full input input-bordered"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center my-3">
            <div className="flex items-center">
              <p>Male:</p>
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                className="checkbox mx-2"
              />
            </div>
            <div className="flex items-center">
              <p>Female:</p>
              <input
                type="checkbox"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                className="checkbox mx-2"
              />
            </div>
          </div>
          <p className="text-center my-2">
            Already have an account?
            <Link className="text-blue-300" to="/login">
              &nbsp;Login
            </Link>
          </p>
          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 btn-error"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
