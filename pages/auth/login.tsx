import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  // Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // Sign in with Facebook
  const fbProvider = new FacebookAuthProvider();
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      //   const credential = await FacebookAuthProvider.credentialFromResult(
      //     result
      //   );
      //   const token = credential?.accessToken;
      //   let photoUrl = result.user.photoURL + "?height=500&access_token=" + token;
      //   await updateProfile(auth.currentUser, { photoURL: photoUrl });
      route.push("/dasboard");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      Router.push("/dashboard");
    }
  }, [user]);

  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg bg-slate-100">
      <h2 className="text-3xl font-medium">Join Today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in page</h3>
      </div>
      <div className="flex flex-col gap-4">
        <button
          className="text-white bg-gray-600 p-4 w-full font-medium rounded-lg flex align-middle gap-2"
          onClick={GoogleLogin}
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
        <button
          className="text-white bg-gray-600 p-4 w-full font-medium rounded-lg flex align-middle gap-2"
          onClick={FacebookLogin}
        >
          <AiFillFacebook className="text-2xl text-blue-500" />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
