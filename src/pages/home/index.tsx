import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import React from "react";

const index = () => {
  const { signOut, authUser }: any = useFirebaseAuth();

  return (
    <div>
      <div>
        <h1>Hello! ${authUser?.email}</h1>
      </div>
      <button className="p-6 bg-red-600 text-white m-12" onClick={signOut}>
        Logout
      </button>
    </div>
  );
};

export default index;
