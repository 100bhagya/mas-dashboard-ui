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
import { useSelector, useDispatch } from "react-redux";
import { login } from "../app/features/user/userSlice";
import LoadingSpinner from "../Components/LoadingSpinner";
import { API_BASE_URL } from "../data/consts";
import axios from "axios";
const Signup = () => {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  async function DoSignup() {
    let item = {
      firstName: firstname,
      lastName: lastname,
      username: username,
      email: email,
      role: ["user"],
      password: password,
      deleted: "false",
    };

    if (password === confirmpassword) {
      var result = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      result = await result.json();
    } else {
      setError("Passwords does not match");
    }

    if (
      password === confirmpassword &&
      result.message === "User registered successfully!"
    ) {
      const bodyParameters = {
        email: email,
        password: password,
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
      if (user.isAuthenticated) {
        navigate("/");
      }
    } else if (result.message === "Error: Email is already in use!") {
      setError("Email is already taken!");
    } else {
      setError("Invalid Email Entered");
    }
  }
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 w-screen h-screen overflow-auto ">
      <div className="flex flex-col items-center justify-center text-center gap-4 mx-2 my-10">
        {error ? (
          <div className="bg-white w-full flex shadow-xl rounded-tr-xl rounded-br-xl">
            <div className="w-2 bg-red-600 rounded-tl-xl rounded-bl-xl"></div>
            <div className="ml-2 py-2 text-red-500">{error}</div>
          </div>
        ) : null}
        <div className="bg-white rounded-2xl shadow-2xl flex">
          <div className="flex flex-col gap-4 p-4  md:w-[300px]">
            <div className="text-left font-bold">
              <img src={Logo} alt="logo" className="h-10" />
            </div>
            <div className="py-10">
              <h2 className="flex flex-col gap-4 items-center justify-center">
                Create your Account
              </h2>
              <div className="bg-blue-600 h-1 w-10 inline-block mb-2"></div>

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
                  className="border-2 cursor-pointer mt-8 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white"
                >
                  {isLoading ? <LoadingSpinner /> : "Sign Up"}
                </div>
                <div className="text-black text-sm mt-4 md:hidden">
                  Already have an account? Sign In{" "}
                  <a className="text-blue-500" href="/signin">
                    Here
                  </a>
                  !
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex flex-col gap-4 justify-center items-center hidden bg-blue-600 text-white rounded-tr-2xl rounded-br-2xl p-4 md:w-[300px]">
            <h2 className="text-3xl  font-bold mb-2">Hello, Friend!</h2>
            <div className="bg-white h-1 w-10 inline-block mb-2"></div>
            <p className="mb-10">Already have an account then Sign In</p>
            <Link to="/signin">
              <div className="border-2 border-white rounded-full inline-block font-semibold hover:bg-white hover:text-blue-600 px-4 py-2">
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
