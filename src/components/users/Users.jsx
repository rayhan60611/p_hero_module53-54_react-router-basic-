// import React from 'react';

import { useLoaderData } from "react-router-dom";
import User from "../../components/user/User.jsx";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="text-center  bg-green-200 p-10 ">
      <h1 className="text-3xl my-20">Total Users : {users.length}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
