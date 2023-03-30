import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../images/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { useRef } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import axios from "axios";
import { API_BASE_URL } from "../data/consts";
import { useEffect } from "react";

const ResetPassword = () => {
  const password = useRef();
  const confirmPassword = useRef();
  const [err, setErr] = useState();
  const [message, setMessage] = useState();
  const [heading, setHeading] = useState();
  const [fetching, setFetching] = useState(false);

  const { token } = useParams();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/auth/reset_password?token=${token}`)
      .then((response) => {
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
      token: token,
    };
    e.preventDefault();
    if (password.current.value === confirmPassword.current.value) {
      setFetching(true);
      axios
        .post(`${API_BASE_URL}/api/auth/reset_password`, bodyParameters)
        .then((response) => {
          setFetching(false);

          setMessage("You have successfully changed your password.");
        })
        .catch((err) => {
          setFetching(false);
          console.log(err);
          setErr("Invalid Token");
        });
    } else {
      setErr("Passwords does not match");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        {err ? (
          <div className="bg-white w-[60%] mb-4 flex shadow-xl rounded-tr-xl rounded-br-xl">
            <div className="w-2 bg-red-600 rounded-tl-xl rounded-bl-xl"></div>
            <div className="py-2 ml-5 text-red-500"> {err} </div>
          </div>
        ) : null}

        <div className="flex flex-col items-center justify-center bg-white shadow-2xl shadow-outline md:flex-row rounded-3xl">
          <div className="flex flex-col gap-4 p-4 md:w-1/2">
          <div className="font-bold text-left">
              <img src={Logo} alt="logo" className="h-10" />
            </div>
            {message ? (
              <div className="py-2 pt-10 ml-5 text-2xl text-red-500">
                {" "}
                {message}{" "}
              </div>
            ) : (
              <div className="py-10">
                <h2 className="mb-4 text-2xl font-semibold text-blue-600 lg:px-4 ">{heading}</h2>
                <div className="inline-block w-10 h-1 mb-2 bg-blue-600"></div>

                <form
                  className="flex flex-col items-center gap-4"
                  onSubmit={handleSubmit}
                >
                  <div className="flex items-center w-64 p-2 mb-3 bg-gray-100">
                    <AiOutlineUser className="m-2 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      ref={password}
                      className="flex-1 text-sm bg-gray-100 outline-none"
                    />
                  </div>

                  <div className="flex items-center w-64 p-2 mb-3 bg-gray-100">
                    <AiOutlineUser className="m-2 text-gray-400" />
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      required
                      ref={confirmPassword}
                      className="flex-1 text-sm bg-gray-100 outline-none"
                    />
                  </div>

                  <button
                    className="inline-block px-12 py-2 font-semibold text-blue-600 border-2 border-blue-600 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white"
                    type="submit"
                  >
                    {fetching ? <LoadingSpinner /> : "Submit"}
                  </button>
                </form>
                <div className="mt-4 text-sm text-black md:hidden">
                Sign In{" "}
                <a className="text-blue-500" href="/signin">
                  Here
                </a>
                !
              </div>
              </div>
            )}
          </div>
          <div className="box-border flex-col items-center justify-center hidden h-full gap-4 px-12 py-32 text-white bg-blue-600 md:flex rounded-tr-2xl rounded-br-2xl md:w-1/2">
            <h2 className="mb-2 text-3xl font-bold">Hello, Friend!</h2>
            <div className="inline-block w-10 h-1 mb-2 bg-white"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us.
            </p>
            <Link to="/signin">
              <div className="inline-block px-12 py-2 font-semibold border-2 border-white rounded-full hover:bg-white hover:text-blue-600">
                Sign In
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
