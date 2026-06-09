import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
// import { useSelector } from "react-redux";

const OtherUsers = ({ users }) => {
  // my custom hook
  useGetOtherUsers();
  if(!users) return null;
  // const {otherUsers} = useSelector(store=>store.user);
  // if(!otherUsers) return; // early return in react

  return (
    <div className="h-full overflow-y-auto users-scroll">
      {
        users?.map((user)=>{
          return (
            <OtherUser key={user._id} user={user}/>
          )
        })
      }
    </div>
  );
};

export default OtherUsers;
