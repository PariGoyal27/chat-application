import React from "react";

const OtherUser = () => {
  return (
    <div>
      <div className="flex gap-2 items-center text-white hover:text-zinc-900 hover:bg-zinc-200 rounded-md p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-11 rounded-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtHioeP3798yMa6QIJsA3piLZlDdOMuA17Q&s"
              alt="user-profile"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>Pari Goyal</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
};

export default OtherUser;
