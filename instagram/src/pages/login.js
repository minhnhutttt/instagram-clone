import { isValid } from "date-fns";
import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
function login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setemailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password == "" || emailAddress == "";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setemailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img
          src="./images/iphone-with-profile.png"
          alt="Iphone"
          className="max-w-full"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col bg-white border border-gray-primary p-4 rounded">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="Instagram logo" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(e) => setemailAddress(e.target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your email password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold 
            ${isInvalid && "opacity-50"}`}
            >
              Login
            </button>
          </form>
        </div>

        <div className="flex justify-center items-center flex0col w-full bg-white p-4 border border-gray-primary mt-4 rounded">
          <p className="text-sm">
            Don't have an account? {``}
            <Link to="/signup" className="font-bold text-blue-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default login;
