import React, { useState } from "react";
import {
  // FaFacebookF,
  // FaGoogle,
  // FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { useContext, useRef } from "react";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext";
import LoadingSpinner from "../Components/LoadingSpinner";

const Signin = () => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [error, setError] = useState();

  const email = useRef();
  const password = useRef();
  const { loginInfo, isFetching, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log("data", email.current.value, password.current.value);
    await loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  // console.log(loginInfo);
  if (loginInfo) {
    navigate("/");
  }
  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {error ? (
          <div className="bg-white w-[60%] mb-4 flex shadow-xl rounded-tr-xl rounded-br-xl">
            <div className="w-2 bg-red-600 rounded-tl-xl rounded-bl-xl"></div>
            <div className="py-2 text-red-500 ml-5">Please Enter Correct Credentials</div>
          </div>
        ) : null}

        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <img src={Logo} alt="logo" className="h-10" />
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">
                Sign in to Account
              </h2>
              <div className="bg-blue-600 h-1 w-10 inline-block mb-2"></div>
              
              <form className="flex flex-col items-center" onSubmit={handleSignIn}>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <AiOutlineUser className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    ref={email}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    ref={password}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div className="flex justify-between w-64 mb-5 mt-2">
                  <a href="/" className="text-xs">
                    Forget Password?
                  </a>
                </div>
                <button
                  className="border-2 cursor-pointer border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white"
                  disabled={isFetching}
                  type="submit"
                >
                  {isFetching ? <LoadingSpinner/> : ("Sign In")}
                </button>
              </form>
            </div>
          </div>
          <div className="w-2/5 bg-blue-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl  font-bold mb-2">Hello, Friend!</h2>
            <div className="bg-white h-1 w-10 inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us.
            </p>
            <Link to="/signup">
              <div className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-600">
              {isFetching ? <LoadingSpinner/> : ("Sign Up")}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
