import React, { useCallback, useState } from "react";
import { useRef } from "react";
import { API_BASE_URL } from "../data/consts";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDebounce } from "use-lodash-debounce";
import userDefaultImage from "../images/user.png";
import isMobilePhone from "validator/lib/isMobilePhone";
import isPostalCode from "validator/lib/isPostalCode";
import isAlpha from "validator/lib/isAlpha";
import { useDispatch, useSelector } from "react-redux";

import {
  resetProfilePic,
  setProfilePic,
  setUsername,
} from "../app/features/user/userSlice";
import {
  getThemeLightTextColor,
  getThemeTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";
//Toast Notifications
const toastMessage = (message) => toast(message);

const Account = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.user);
  //Refs and States
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const postalCodeRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();
  const userNameRef = useRef();
  const phoneNumberRef = useRef();
  const postalCodeDebouncedValue = useDebounce(
    postalCodeRef.current?.value,
    1000
  );
  const fileSelect = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  //handlers

  const handleFetchProfile = useCallback((cancel = false) => {
    const config = {
      headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
    };
    setIsLoading(true);
    axios
      .get(`${API_BASE_URL}/api/getUserProfile`, config)
      .then((response) => {
        firstNameRef.current.value = response.data.firstName || "";
        lastNameRef.current.value = response.data.lastName || "";
        userNameRef.current.value = response.data.username || "";
        phoneNumberRef.current.value = response.data.phoneNo || "";
        addressRef.current.value = response.data.address || "";
        cityRef.current.value = response.data.city || "";
        stateRef.current.value = response.data.state || "";
        postalCodeRef.current.value = response.data.postalCode || "";
        emailRef.current.value = response.data.email || "";
        dispatch(setProfilePic(response.data.profilePic));
        dispatch(setUsername(response.data.username));
        setIsLoading(false);
        {
          cancel && toastMessage("Changes reverted successfully.");
        }
      })
      .catch((error) => {
        console.log(error);
        toastMessage("Something went wrong. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  const handleUpdateProfile = () => {
    if (firstNameRef.current.value === "") {
      toastMessage("First name is required");
      return;
    }
    if (lastNameRef.current.value === "") {
      toastMessage("Last name is required");
      return;
    }

    if (userNameRef.current.value === "") {
      toastMessage("Username is required");
      return;
    }

    if (
      postalCodeRef.current.value !== "" &&
      !isPostalCode(postalCodeRef.current.value, ["IN"])
    ) {
      toastMessage("Please enter a valid postal code.");
      return;
    }
    if (
      (phoneNumberRef.current.value !== "" &&
        !isMobilePhone(phoneNumberRef.current.value, ["en-IN"])) ||
      phoneNumberRef.current.value.toString().length > 10 ||
      phoneNumberRef.current.value.toString()[0] === "+"
    ) {
      toastMessage("Please enter a valid phone number.");
      return;
    }
    if (
      firstNameRef.current.value !== "" &&
      !isAlpha(firstNameRef.current.value)
    ) {
      toastMessage("Please enter a valid first name.");
      return;
    }
    if (
      lastNameRef.current.value !== "" &&
      !isAlpha(lastNameRef.current.value)
    ) {
      toastMessage("Please enter a valid last name.");
      return;
    }
    let bodyParameters = {
      firstName: firstNameRef.current.value.trim() || "",
      lastName: lastNameRef.current.value.trim() || "",
      username: userNameRef.current.value.trim() || "",
      profilePic: user.profilePic || "",
      phoneNo: phoneNumberRef.current.value.trim() || "",
      address: addressRef.current.value.trim(),
      postalCode: postalCodeRef.current.value.trim() || "",
      state: stateRef.current.value.trim() || "",
      city: cityRef.current.value.trim() || "",
    };
    const config = {
      headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
    };

    setIsLoading(true);
    axios
      .put(`${API_BASE_URL}/api/updateProfile`, bodyParameters, config)
      .then(() => {
        handleFetchProfile();
        toastMessage("Profile updated successfully.");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        handleFetchProfile();
        toastMessage("1Something went wrong. Please try again later.");
        setIsLoading(false);
      });
  };

  const fetchDataFromPostalCode = useCallback(() => {
    stateRef.current.value = "";
    axios
      .get(
        `https://api.postalpincode.in/pincode/${postalCodeRef.current.value}`
      )
      .then((response) => {
        if (response.data[0]?.PostOffice) {
          stateRef.current.value = response.data[0]?.PostOffice[0].State || "";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postalCodeDebouncedValue]);

  function uploadFile(file) {
    const url = `https://api.cloudinary.com/v1_1/hackon-technophiles/upload`;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.upload.addEventListener("progress", (e) => {
      if (Math.round((e.loaded * 100.0) / e.total) >= 100) {
        toastMessage("Image upload complete.");
      }
    });

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        dispatch(setProfilePic(response.secure_url));
      }
    };

    fd.append("upload_preset", "udzvlomh");
    fd.append("tags", "browser_upload");
    fd.append("file", file);
    xhr.send(fd);
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      uploadFile(files[i]);
    }
  }

  useEffect(() => {
    handleFetchProfile();
    if (postalCodeDebouncedValue !== "") {
      fetchDataFromPostalCode();
    }
    return () => {
      toast.dismiss();
    };
  }, [postalCodeDebouncedValue]);

  return (
    <div className="px-2 md:px-8 py-4">
      <Toaster />
      <div className="flex flex-col gap-4 md:max-w-[800px] mx-auto">
        <div
          className={`text-3xl font-bold ${getThemeTextColor(theme.themeMode)}`}
        >
          Account
        </div>
        <section className="flex flex-col gap-2 my-2">
          <div
            className={`text-lg font-medium ${getThemeTextColor(
              theme.themeMode
            )}`}
          >
            Profile
          </div>

          <div
            className={`text-sm text-slate-500 ${getThemeLightTextColor(
              theme.themeMode
            )}`}
          >
            This Information will be displayed publicly so be careful what you
            share.
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 w-full">
              <div
                className={`text-sm text-slate-600 font-medium ${getThemeTextSecondaryColor(
                  theme.themeMode
                )}`}
              >
                First Name
              </div>
              <input
                ref={firstNameRef}
                type="text"
                className="w-full p-1 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div
                className={`text-sm text-slate-600 font-medium ${getThemeTextSecondaryColor(
                  theme.themeMode
                )}`}
              >
                Last Name
              </div>
              <input
                ref={lastNameRef}
                type="text"
                className="w-full p-1 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div
                className={`text-sm text-slate-600 font-medium ${getThemeTextSecondaryColor(
                  theme.themeMode
                )}`}
              >
                Username
              </div>
              <input
                ref={userNameRef}
                type="text"
                className="w-full p-1 rounded-md border border-gray-300"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2 w-full my-2">
          <div className={`font-medium ${getThemeTextColor(theme.themeMode)}`}>
            Photo
          </div>
          <div className="flex items-center gap-6">
            <img
              alt="User Profile"
              className="w-10 h-10 rounded-full object-cover"
              src={user.profilePic || userDefaultImage}
            />
            <div
              className={`text-sm font-medium ${
                !user.profilePic && "hidden"
              } cursor-pointer ${getThemeTextColor(theme.themeMode)}`}
              onClick={() => dispatch(resetProfilePic())}
            >
              Remove
            </div>
            <div className="flex">
              <label
                htmlFor="file-upload"
                className="py-1 px-2 rounded-md border border-gray-300 bg-white cursor-pointer"
              >
                {user.profilePic ? "Change" : "Upload"}
              </label>
              <input
                className="invisible w-0"
                id="file-upload"
                ref={fileSelect}
                type="file"
                accept="image/*"
                style={{ display: "block" }}
                onChange={(e) => handleFiles(e.target.files)}
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2 my-2">
          <div
            className={`text-lg font-medium ${getThemeTextColor(
              theme.themeMode
            )}`}
          >
            Personal Information
          </div>
          <div
            className={`text-sm text-slate-500 ${getThemeLightTextColor(
              theme.themeMode
            )}`}
          >
            This Information will be displayed publicly so be careful what you
            share.
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <div
                  className={`text-sm text-slate-600 font-medium ${getThemeTextSecondaryColor(
                    theme.themeMode
                  )}`}
                >
                  Email
                </div>
                <input
                  ref={emailRef}
                  disabled
                  type="text"
                  className={`p-1 rounded-md border border-gray-300 cursor-not-allowed  ${getThemeLightTextColor(
                    theme.themeMode
                  )}`}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div
                  className={`text-sm text-slate-600 font-medium ${getThemeTextSecondaryColor(
                    theme.themeMode
                  )}`}
                >
                  Phone Number
                </div>
                <div className="flex">
                  {/* <span className="absolute flex items-center ">+91</span> */}
                  <span
                    className={`flex justify-center items-center w-[40px] p-1 rounded-l-md border border-gray-300 border-r-0 ${getThemeTextColor(
                      theme.themeMode
                    )}`}
                  >
                    +91
                  </span>
                  <input
                    ref={phoneNumberRef}
                    type="text"
                    className="w-full p-1 rounded-r-md border border-gray-300"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div
                  className={`text-sm text-slate-600 font-medium ${getThemeTextSecondaryColor(
                    theme.themeMode
                  )}`}
                >
                  Postal Code
                </div>
                <input
                  ref={postalCodeRef}
                  type="text"
                  className="min-w-[100px] p-1 rounded-md border border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div
                  className={`text-sm text-slate-600 font-medium ${getThemeTextSecondaryColor(
                    theme.themeMode
                  )}`}
                >
                  State
                </div>
                <input
                  ref={stateRef}
                  type="text"
                  className="min-w-[100px] p-1 rounded-md border border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div
                  className={`text-sm text-slate-600 font-medium ${getThemeTextSecondaryColor(
                    theme.themeMode
                  )}`}
                >
                  City
                </div>
                <input
                  ref={cityRef}
                  type="text"
                  className="min-w-[100px] p-1 rounded-md border border-gray-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className={`text-sm text-slate-600 font-medium ${getThemeTextSecondaryColor(
                  theme.themeMode
                )}`}
              >
                Address
              </div>
              <input
                ref={addressRef}
                type="text"
                className="w-full p-1 rounded-md border border-gray-300"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2 my-2">
          <div className="flex justify-end gap-6">
            {isLoading ? (
              <div className="mx-auto">
                <LoadingSpinner />
              </div>
            ) : (
              <>
                <button
                  onClick={() => {
                    handleFetchProfile(true);
                  }}
                  className="py-1 px-2 rounded-md border border-gray-300 bg-white"
                >
                  Cancel
                </button>

                <button
                  onClick={handleUpdateProfile}
                  className="py-1 px-2 rounded-md border border-gray-300 bg-blue-500 text-white"
                >
                  Update
                </button>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Account;
