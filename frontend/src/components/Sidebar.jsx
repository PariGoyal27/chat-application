import React, { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [searchedUsers, setSearchedUsers] = useState(null);

  const { otherUsers } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (search.trim() === "") {
      setSearchedUsers(null);
    }
  }, [search]);
  const logoutHandler = async () => {
    try {
      // with credential is not necessary because we are not using isAuthenticated there in userRoute
      // axios.defaults.withCredentials = true;
      const res = await axios.get(`http://localhost:8080/api/v1/user/logout`);
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if(!search){
      setSearchedUsers(null);
      return;
    }
    const filteredUsers = otherUsers?.filter((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase()),
    );
    if (filteredUsers.length > 0) {
      setSearchedUsers(filteredUsers);
    }else{
      toast.error("User not found!");
    }
  };
  return (
    <div className="border-r border-slate-500 h-full p-4 flex flex-col">
      <form
        onSubmit={searchSubmitHandler}
        action=""
        className="flex items-center gap-2"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered rounded-md"
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="btn bg-zinc-600 text-white">
          <MdOutlineSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
      <div className="divider px-3"></div>
      <div className="flex-1 overflow-hidden">
        <OtherUsers users={searchedUsers || otherUsers}/>
      </div>
      <div className="">
        <button onClick={logoutHandler} className="btn btn-sm">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
