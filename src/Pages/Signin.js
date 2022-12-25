import React, { useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { useRef } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import { login } from "../app/features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { API_BASE_URL } from "../data/consts";
const Signin = () => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [error, setError] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    const bodyParameters = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    setIsLoading(true);
    axios
      .post(`${API_BASE_URL}/api/auth/login`, bodyParameters)
      .then((res) => {
        dispatch(login(res.data));
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
        setIsLoading(false);
      });
  };
  if (user.isAuthenticated) {
    navigate("/");
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 w-screen overflow-auto h-screen">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        {error ? (
          <div className="bg-white w-full flex shadow-xl rounded-tr-xl rounded-br-xl">
            <div className="w-2 bg-red-600 rounded-tl-xl rounded-bl-xl"></div>
            <div className="ml-2 py-2 text-red-500">
              Please Enter Correct Credentials
            </div>
          </div>
        ) : null}

        <div className="bg-white rounded-2xl shadow-2xl flex">
          <div className="flex flex-col gap-4 p-4 md:w-1/2">
            <div className="text-left font-bold">
              <img src={Logo} alt="logo" className="h-10" />
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <h2 className="text-3xl font-bold text-blue-600">
                Sign in to Account
              </h2>
              <div className="bg-blue-600 h-1 w-10 inline-block"></div>

              <form
                className="flex flex-col items-center gap-4"
                onSubmit={handleSignIn}
              >
                <div className="bg-gray-100 p-2 flex items-center">
                  <AiOutlineUser className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    ref={emailRef}
                    className="bg-gray-100 outline-none text-sm w-full"
                  />
                </div>
                <div className="bg-gray-100 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    ref={passwordRef}
                    className="bg-gray-100 outline-none text-sm w-full"
                  />
                </div>

                <div className="flex justify-betwee">
                  <a href="/forgotPassword" className="text-xs">
                    Forgot Password?
                  </a>
                </div>
                <button
                  className="border-2 cursor-pointer border-blue-600 text-blue-600 rounded-full inline-block font-semibold hover:bg-blue-600 hover:text-white px-4 py-2"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? <LoadingSpinner /> : "Sign In"}
                </button>
              </form>
              <div className="text-black text-sm md:hidden">
                Don't have an account? Sign Up{" "}
                <a className="text-blue-500" href="/signup">
                  Here
                </a>
                !
              </div>
            </div>
          </div>
          <div className="md:flex flex-col gap-4 justify-center items-center hidden bg-blue-600 text-white rounded-tr-2xl rounded-br-2xl p-4 md:w-1/2">
            <h2 className="text-3xl  font-bold">Hello, Friend!</h2>
            <div className="bg-white h-1 w-10 inline-block"></div>
            <p className="">
              Fill up personal information and start journey with us.
            </p>
            <Link to="/signup">
              <div className="border-2 border-white rounded-full inline-block font-semibold hover:bg-white hover:text-blue-600 px-4 py-2">
                Sign Up
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
