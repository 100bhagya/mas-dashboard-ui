import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../images/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { useRef } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import axios from "axios";
import { API_BASE_URL } from "../data/consts";
import { useEffect } from "react";

const Signin = () => {
  const password = useRef();
  const confirmPassword = useRef();
  const [err, setErr] = useState();
  const [message, setMessage] = useState();
  const [heading, setHeading] = useState();
  const [fetching, setFetching] = useState(false);
  
  const { token } = useParams();
//   console.log("data = ", {token});

useEffect(()=>{
    axios.get(`${API_BASE_URL}/api/auth/reset_password?token=${token}`)
    .then((response) => {
    //   console.log("Response from api is = " + response.data);
      setHeading(response.data);
    })
    .catch((err) => {
      console.log(err);
      setMessage("Invalid Link to set password");
    });
}, [token]);

  const handleSubmit = (e) => {
    setErr();
    let bodyParameters = {
        password: password.current.value,
        token: token
      };
    e.preventDefault();
    if(password.current.value === confirmPassword.current.value){
        setFetching(true);
        axios.post(`${API_BASE_URL}/api/auth/reset_password`, bodyParameters)
        .then((response) => {
          setFetching(false);
        //   console.log("Response from api is = " + response);
          setMessage("You have successfully changed your password.");
        })
        .catch((err) => {
            setFetching(false);  
          console.log(err);
          setErr("Invalid Token");
        });
    }else{
        setErr("Passwords does not match");
    }
   
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
            {message ? (<div className="text-2xl py-2 text-red-500 ml-5 pt-10"> {message} </div>) : (<div className="py-10">
              <h2 className="text-2xl text-blue-500 mb-4">
                {heading}
              </h2>
              <div className="bg-blue-600 h-1 w-10 inline-block mb-2"></div>
              
              <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <AiOutlineUser className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    ref={password}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <AiOutlineUser className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    ref={confirmPassword}
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
            </div>)}
            

          </div>
          <div className="w-2/5 bg-blue-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl  font-bold mb-2">Hello, Friend!</h2>
            <div className="bg-white h-1 w-10 inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us.
            </p>
            <Link to="/signin">
              <div className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-600">
                Sign In
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
