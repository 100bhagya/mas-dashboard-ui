import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
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
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [username, setUsername] = useState('');
  const [confirmpassword, setConfirmpassword] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  async function DoSignup() {
    if(firstname===''){ 
      setError("First Name is a required field");
      return;
    } 
    if(lastname===''){ 
      setError("Last Name is a required field")
      return;
    } 
    if(username===''){ 
      setError("User Name is a required field")
      return;
    } 
    if(email===''){ 
      setError("Email is a required field")
      return;
    } 
   

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
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-auto bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-4 mx-2 my-10 text-center">
        {error ? (
          <div className="flex w-full bg-white shadow-xl rounded-tr-xl rounded-br-xl">
            <div className="w-2 bg-red-600 rounded-tl-xl rounded-bl-xl"></div>
            <div className="py-2 ml-2 text-red-500">{error}</div>
          </div>
        ) : null}
        <div className="flex bg-white shadow-2xl rounded-2xl">
          <div className="flex flex-col gap-4 p-4  md:w-[300px] md:h-[550px]">
            <div className="font-bold text-left">
              <img src={Logo} alt="logo" className="h-10" />
            </div>
            <div className="py-2">
              <h2 className="flex flex-col items-center justify-center gap-4">
                Create your Account
              </h2>
              <div className="inline-block w-10 h-1 mb-2 bg-blue-600"></div>

              <div className="flex flex-col items-center">
                <div className="flex items-center w-64 p-2 mb-3 bg-gray-100">
                  <AiOutlineUser className="m-2 text-gray-400" />
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                    className="flex-1 text-sm bg-gray-100 outline-none"
                    required
                    value={firstname}
                  />
                </div>
                <div className="flex items-center w-64 p-2 mb-3 bg-gray-100">
                  <AiOutlineUser className="m-2 text-gray-400" />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                    className="flex-1 text-sm bg-gray-100 outline-none"
                    required
                    value={lastname}
                  />
                </div>
                <div className="flex items-center w-64 p-2 mb-3 bg-gray-100">
                  <AiOutlineUser className="m-2 text-gray-400" />
                  <input
                    type="text"
                    name="username"
                    placeholder="User Name"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className="flex-1 text-sm bg-gray-100 outline-none"
                    required
                    value={username}
                  />
                </div>
                <div className="flex items-center w-64 p-2 mb-3 bg-gray-100">
                  <FaRegEnvelope className="m-2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="flex-1 text-sm bg-gray-100 outline-none"
                    required
                    value={email}
                  />
                </div>
                <div className="flex items-center w-64 p-2 mb-3 bg-gray-100">
                  <MdLockOutline className="m-2 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="flex-1 text-sm bg-gray-100 outline-none"
                    required
                    value={password}
                  />
                </div>
                <div className="flex items-center w-64 p-2 bg-gray-100">
                  <MdLockOutline className="m-2 text-gray-400" />
                  <input
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setConfirmpassword(e.target.value);
                    }}
                    className="flex-1 text-sm bg-gray-100 outline-none"
                  />
                </div>

                <div
                  onClick={DoSignup}
                  className="inline-block px-12 py-2 mt-4 font-semibold text-blue-600 border-2 border-blue-600 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white"
                >
                  {isLoading ? <LoadingSpinner /> : "Sign Up"}
                </div>
                <div className="mt-4 text-sm text-black md:hidden">
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
            <h2 className="mb-2 text-3xl font-bold">Hello, Friend!</h2>
            <div className="inline-block w-10 h-1 mb-2 bg-white"></div>
            <p className="mb-10">Already have an account then Sign In</p>
            <Link to="/signin">
              <div className="inline-block px-4 py-2 font-semibold border-2 border-white rounded-full hover:bg-white hover:text-blue-600">
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
