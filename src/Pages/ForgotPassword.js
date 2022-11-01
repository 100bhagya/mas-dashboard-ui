import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { useRef } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import axios from "axios";
import { API_BASE_URL } from "../data/consts";

const Signin = () => {
  const email = useRef();
  const [err, setErr] = useState();
  const [message, setMessage] = useState();
  const [fetching, setFetching] = useState(false);

  const handleSubmit = (e) => {
    setErr();
    setFetching(true);
    let bodyParameters = {
        email: email.current.value
      };
    e.preventDefault();
    // console.log("data = ", email.current.value);
    axios.post(`${API_BASE_URL}/api/auth/forgot_password`, bodyParameters)
      .then((response) => {
        setFetching(false);
        // console.log("Response from api is = " + response.data);
        setMessage(response.data);
      })
      .catch((err) => {
        setFetching(false);
        console.log(err);
        setErr("User with given email does not exist!");
      });
  };
  
  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {err ? (
          <div className="bg-white w-[60%] mb-4 flex shadow-xl rounded-tr-xl rounded-br-xl">
            <div className="w-2 bg-red-600 rounded-tl-xl rounded-bl-xl"></div>
            <div className="py-2 text-red-500 ml-5"> {err} </div>
          </div>
        ) : null}

        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <img src={Logo} alt="logo" className="h-10" />
            </div>
            {message ? (<div className="flex h-[50vh]"><div className="py-2 text-xl text-red-500 ml-5 m-auto"> {message} </div></div>) : 
            (<div className="flex h-[50vh]">
            <div className="py-10 m-auto">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">
                Enter your Email
              </h2>
              <div className="bg-blue-600 h-1 w-10 inline-block mb-2"></div>
              
              <form className="flex flex-col items-center" onSubmit={handleSubmit}>
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
              
                <button
                  className="border-2 cursor-pointer border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white"
                  
                  type="submit"
                >
                    {fetching ? <LoadingSpinner/> : ("Submit")}
                </button>
              </form>
            </div>
            </div>)}
            

          </div>
          <div className="w-2/5 bg-blue-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl  font-bold mb-2">Hello, Friend!</h2>
            <div className="bg-white h-1 w-10 inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us.
            </p>
            <Link to="/signup">
              <div className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-600">
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
