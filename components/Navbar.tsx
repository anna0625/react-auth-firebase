import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10">
      <Link href={"/"}>Logo</Link>
      <ul>
        {!user && (
          <Link href={"/auth/login"}>
            <a className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8">
              Join Now
            </a>
          </Link>
        )}
        {user && (
          <div className="flex flex-row justify-between items-center gap-2">
            <p className="text-sm">{user.displayName}</p>
            <Link href={"/dashboard"}>
              <picture>
                <img
                  src={user.photoURL!}
                  alt="Picture of the author"
                  className="h-10 w-10 rounded-md"
                />
              </picture>
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
};
