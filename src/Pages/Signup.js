import React, { useState } from "react";
import {
  // FaFacebookF,
  // FaGoogle,
  // FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import Logo from "../images/logo.png";

const Signup = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();

  async function DoSignup() {
    let item = {
      firstName: firstname,
      lastName: lastname,
      username: username,
      email: email,
      role: ["admin"],
      password: password,
      deleted: "false",
    };

    var result = await fetch("http://localhost:8081/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    // console.log("result", result);

    if (
      password === confirmpassword &&
      result.message === "User registered successfully!"
    ) {
      navigate("/signin");
    } else if (result.message === "Error: Username is already taken!") {
      setError("Username is already taken!");
    } else {
      setError("Please Enter your Correct Credentials");
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {error ? (
          <div className="bg-white w-[60%] mb-4 flex shadow-xl rounded-tr-xl rounded-br-xl">
            <div className="w-2 bg-red-600 rounded-tl-xl rounded-bl-xl"></div>
            <div className="py-2 text-red-500 ml-5">{error}</div>
          </div>
        ) : null}
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
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                    className="bg-gray-100 outline-none text-sm flex-1"
                    required
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <AiOutlineUser className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                    className="bg-gray-100 outline-none text-sm flex-1"
                    required
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <AiOutlineUser className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="username"
                    placeholder="User Name"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className="bg-gray-100 outline-none text-sm flex-1"
                    required
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="bg-gray-100 outline-none text-sm flex-1"
                    required
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="bg-gray-100 outline-none text-sm flex-1"
                    required
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setConfirmpassword(e.target.value);
                    }}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div
                  onClick={DoSignup}
                  className="border-2 cursor-pointer mt-10 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white"
                >
                  Sign Up
                </div>
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
