// import React from "react";

import { useLoaderData } from "react-router-dom";

const Userdetails = () => {
  const user = useLoaderData();
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen bg-lime-300">
      <h1 className="font-bold font text-2xl">
        Full Details of User : {user.id}
      </h1>
      <h1 className="font-bold text-indigo-600 text-xl">{user.name}</h1>
      <h1 className="font-bold text-indigo-600 text-xl">{user.email}</h1>
      <h1 className="font-bold text-indigo-600 text-xl">{user.website}</h1>
      <h1 className="font-bold text-indigo-600 text-xl">{user.address.city}</h1>
    </div>
  );
};

export default Userdetails;
