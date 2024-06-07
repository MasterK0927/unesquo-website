"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../Components/firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import styles from "./LoginPage.module.css"; 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter(); 

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
      router.push("/farewell");
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("Failed to login. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        if (user.email){
            const emailDomain = user.email.split("@")[1];

            if (emailDomain === "bitmesra.ac.in") {
                toast.success("Logged in successfully!");
                router.push("/farewell");
            } else {
                toast.error("Access denied. Please use your institutional email.");
                await auth.signOut(); 
            }
        }
    } catch (error) {
        console.error("Error signing in with Google:", error);
        toast.error("Failed to login with Google. Please try again.");
      } finally {
        setLoading(false);
    }
      
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSignIn} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className={`${styles.button} ${styles.googleButton}`}
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In with Google"}
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;
