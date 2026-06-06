import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import OtherUsers from "./OtherUsers";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 h-full p-4 flex flex-col">
      <form action="" className="flex items-center gap-2">
        <input
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
        <OtherUsers />
      </div>
      <div className="">
        <button className="btn btn-sm">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
