import React, { useState } from "react";
import { useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { API_BASE_URL } from "../data/consts";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDebounce } from "use-lodash-debounce";
const profileUpdatedNotification = () => toast("Profile Updated Successfully.");
const errorNotification = () =>
  toast("Something went wrong. Please try again.");
const changesRevertedNotification = () =>
  toast("Changes Reverted Successfully.");
const pleaseFillAllFieldsNotification = () => toast("Please fill all fields.");

const Account = () => {
  const { loginInfo } = useContext(AuthContext);
  var token = loginInfo.accessToken;
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const postalCodeRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();
  const userNameRef = useRef();
  const phoneNumberRef = useRef();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);

  const [isLoading, setIsLoading] = useState(false);
  const handleFetchProfile = (cancel = false) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
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
        setIsLoading(false);
        {
          cancel && changesRevertedNotification();
        }
      })
      .catch((error) => {
        console.log(error);
        errorNotification();
        setIsLoading(false);
      });
  };
  const handleUpdateProfile = () => {
    let bodyParameters = {
      firstName: firstNameRef.current.value.trim(),
      lastName: lastNameRef.current.value.trim(),
      username: userNameRef.current.value.trim(),
      // profilePic: "No IMG URL provided",
      phoneNo: parseInt(phoneNumberRef.current.value.trim()), //TODO
      address: addressRef.current.value.trim(),
      postalCode: postalCodeRef.current.value.trim(),
      state: stateRef.current.value.trim(),
      city: cityRef.current.value.trim(),
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    if (
      !(
        firstNameRef.current.value === "" ||
        lastNameRef.current.value === "" ||
        postalCodeRef.current.value === "" ||
        stateRef.current.value === "" ||
        cityRef.current.value === "" ||
        addressRef.current.value === "" ||
        userNameRef.current.value === "" ||
        phoneNumberRef.current.value === ""
      )
    ) {
      setIsLoading(true);
      axios
        .put(`${API_BASE_URL}/api/updateProfile`, bodyParameters, config)
        .then((response) => {
          handleFetchProfile();
          profileUpdatedNotification();
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          handleFetchProfile();
          errorNotification();
          setIsLoading(false);
        });
    } else {
      pleaseFillAllFieldsNotification();
    }
  };

  useEffect(() => {
    handleFetchProfile();
  }, []);

  useEffect(() => {
    if (value !== "") {
      fetchDataFromPostalCode(postalCodeRef.current.value);
    }
  }, [debouncedValue]);

  const fetchDataFromPostalCode = (postalCode) => {
    stateRef.current.value = "";
    axios
      .get(`https://api.postalpincode.in/pincode/${postalCode}`)
      .then((response) => {
        console.log(response);
        if (response.data[0]?.PostOffice) {
          stateRef.current.value = response.data[0]?.PostOffice[0].State || "";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center py-12">
      <div className="flex flex-col gap-6">
        <div className="text-3xl font-bold">Account</div>
        <div>
          <div className="text-lg font-medium">Profile</div>
          <div className="text-sm text-slate-500">
            This Information will be displayed publicly so be careful what you
            share.
          </div>
        </div>
        <div>
          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-600 font-medium">
                First Name
              </div>
              <input
                ref={firstNameRef}
                type="text"
                className="min-w-[250px] p-1 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-600 font-medium">
                Last Name
              </div>
              <input
                ref={lastNameRef}
                type="text"
                className="min-w-[250px] p-1 rounded-md border border-gray-300"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <div className="text-sm text-slate-600 font-medium">Username</div>
            <input
              ref={userNameRef}
              type="text"
              className="max-w-[350px] p-1 rounded-md border border-gray-300"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-medium">Photo</div>
          <div className="flex gap-6 items-center">
            <img
              alt="User Profile"
              className="w-10 h-10 rounded-full"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHj-Uul_quJmA/profile-displayphoto-shrink_400_400/0/1663409602983?e=1672272000&v=beta&t=-3uvoSvXfJpSjjZ5ruXq3JsLt8eM82ciNYOYoMWkLc4"
            />

            <button className="py-1 px-2 rounded-md border border-gray-300 bg-white">
              Change
            </button>
            <div className="text-sm font-medium">Remove</div>
          </div>
        </div>

        <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-200"></hr>

        <div>
          <div className="text-lg font-medium">Personal Information</div>
          <div className="text-sm text-slate-500">
            This Information will be displayed publicly so be careful what you
            share.
          </div>
        </div>

        <div>
          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-600 font-medium">Email</div>
              <input
                ref={emailRef}
                disabled
                type="text"
                className="min-w-[250px] p-1 rounded-md border border-gray-300 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-600 font-medium">
                Phone Number
              </div>
              <input
                ref={phoneNumberRef}
                type="text"
                className="min-w-[250px] p-1 rounded-md border border-gray-300"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-600 font-medium">
                {" "}
                Postal Code
              </div>
              <input
                onChange={(e) => setValue(e.target.value)}
                ref={postalCodeRef}
                type="text"
                className="min-w-[100px] p-1 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-600 font-medium">State</div>
              <input
                ref={stateRef}
                type="text"
                className="min-w-[100px] p-1 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-600 font-medium">City</div>
              <input
                ref={cityRef}
                type="text"
                className="min-w-[100px] p-1 rounded-md border border-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-sm text-slate-600 font-medium">Address</div>
          <input
            ref={addressRef}
            type="text"
            className="w-full p-1 rounded-md border border-gray-300"
          />
        </div>

        <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-200"></hr>

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
      </div>
      <Toaster />
    </div>
  );
};

export default Account;
