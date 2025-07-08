import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "../../../firebase";

export const loginAsync = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
    
    dispatch({ type: "LOGIN", payload: userCredential.user });
  } catch (error) {
    dispatch({ type: "AUTH_ERROR", payload: error.message });
  }
};

export const registerAsync = (email, password) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    dispatch({ type: "REGISTER_SUCCESS", payload: userCredential.user });
  } catch (error) {
    dispatch({ type: "AUTH_ERROR", payload: error.message });
  }
};

export const loginWithGoogle = () => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    dispatch({ type: "LOGIN", payload: result.user });
  } catch (error) {
    dispatch({ type: "AUTH_ERROR", payload: error.message });
  }
};

export const logoutAsync = () => async (dispatch) => {
  try {
    sessionStorage.removeItem("user");
    dispatch({ type: "LOGOUT_SUCCESS" });
  } catch (error) {
    dispatch({ type: "AUTH_ERROR", payload: error.message });
  }
};
