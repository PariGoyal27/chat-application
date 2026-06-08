import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        // Because before fetching other users the middleware isAuthenticated is running in userRoute
        axios.defaults.withCredentials = true;
        const res = await axios.get(`http://localhost:8080/api/v1/user/`);
        // console.log(res.data);
        // store
        dispatch(setOtherUsers(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
