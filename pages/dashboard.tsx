import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/router";

const Dashboard = () => {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  if (loading) return <h1>Loading...</h1>;
  if (!user) route.push("/auth/login");

  if (user)
    return (
      <div>
        <h1 className="my-5">Welcome to your dashboard {user.displayName}</h1>
        <button
          onClick={() => auth.signOut()}
          className="bg-slate-300 p-3 rounded-lg"
        >
          Sign Out
        </button>
      </div>
    );
};

export default Dashboard;
