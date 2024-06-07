"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../Components/firebase/firebase";

const SignOutPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Sign out the user
    signOut(auth)
      .then(() => {
        // Redirect to the home page after sign out
        router.push("/farewell");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        // Redirect to the home page even if sign out fails
        router.push("/farewell");
      });
  }, []);

  return <div>Signing out...</div>;
};

export default SignOutPage;
