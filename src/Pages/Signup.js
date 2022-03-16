import React from "react";
import {
  // FaFacebookF,
  // FaGoogle,
  // FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import Logo from "../images/logo.png";


const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <img src={Logo} alt="logo" className="h-10" />
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">
                Create your Account
              </h2>
              <div className="bg-blue-600 h-1 w-10 inline-block mb-2"></div>
              {/* <div className="flex justify-center my-2">

                <a
                  href="/"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="/"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a
                  href="/"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-400 my-3">or use your email account</p> */}

              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <AiOutlineUser className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <AiOutlineUser className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">

                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <a
                  href="/"
                  className="border-2 mt-10 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white"

                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-blue-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">

            <h2 className="text-3xl  font-bold mb-2">Hello, Friend!</h2>
            <div className="bg-white h-1 w-10 inline-block mb-2"></div>
            <p className="mb-10">Already have an account then Sign In</p>
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

export default Signup;
