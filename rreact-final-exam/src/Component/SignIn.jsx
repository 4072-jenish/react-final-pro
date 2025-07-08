import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth, googleProvider } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { loginAsync, loginWithGoogle } from "../Services/Actions/authActions";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(loginAsync(email, password));
}, []);


  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
     dispatch(loginAsync(email, password)); 
      toast.success("SIGN IN SUCCESSFULLY ");
      setTimeout(() => {
       navigate("/");
      },3000)
    } catch (err) {
      toast.error(`SIGN IN FAILED ${err.message}`);
    }
  };

const handleGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || user.email.split("@")[0],
        photoURL: user.photoURL || "",
        role: "user",
      });
    }

    const userData = (await getDoc(userRef)).data();
    dispatch({ type: "LOGIN", payload: userData });
    navigate("/");

  } catch (err) {
    console.error("❌ Google login error:", err.message);
  }
};

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
    <ToastContainer autoClose={3000} theme="dark" />
    <div className="card shadow-lg p-4 border-0 rounded-4" style={{ width: "100%", maxWidth: "450px" }}>
      <h3 className="text-center fw-bold mb-4">Welcome Back 👋</h3>
  
      <form onSubmit={handleEmailLogin}>
        <input
          className="form-control my-2 rounded-pill px-4"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="form-control my-2 rounded-pill px-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-success w-100 mt-3 rounded-pill shadow-sm">Sign In</button>
      </form>
  
      <hr className="my-4" />
  
      <button
        onClick={handleGoogle}
        className=" btn  w-100 mb-3 rounded-pill d-flex align-items-center justify-content-center gap-2"
      >
        <FaGoogle /> Sign in with Google
      </button>
  
      <p className="text-center mt-3">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-decoration-none fw-semibold text-primary">
          Register
        </Link>
      </p>
    </div>
  </div>
  
  );
};

export default SignIn;
