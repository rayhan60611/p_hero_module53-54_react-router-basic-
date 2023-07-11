// import React from 'react';

import { Link } from "react-router-dom";

const User = (props) => {
  const user = props.user;
  return (
    <div className="flex flex-col items-center gap-4 bg-white shadow-sm hover:shadow-green-500 hover:shadow-2xl rounded m-2 md:m-6 p-6">
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <Link
        className="font-semibold text-[16px] rounded text-white bg-green-600  p-3  duration-500  border-white border-[1px]"
        to={`/users/${user.id}`}
      >
        Show details...
      </Link>

      <Link to={`/users/${user.id}`}>
        <button className="font-semibold text-[16px] rounded text-white bg-green-600  p-3  duration-500  border-white border-[1px]">
          Show details... btn
        </button>
      </Link>
    </div>
  );
};

export default User;
