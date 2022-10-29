import React from "react";

const Account = () => {
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
                type="text"
                className="min-w-[250px] p-1 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-600 font-medium">
                Last Name
              </div>
              <input
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
              type="text"
              className="max-w-[350px] p-1 rounded-md border border-gray-300"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-medium">Photo</div>
          <div className="flex gap-6 items-center">
            <img
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
                type="text"
                className="min-w-[250px] p-1 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-600 font-medium">
                Phone Number
              </div>
              <input
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
                type="text"
                className="min-w-[100px] p-1 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-600 font-medium">State</div>
              <input
                type="text"
                className="min-w-[100px] p-1 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-600 font-medium">City</div>
              <input
                type="text"
                className="min-w-[100px] p-1 rounded-md border border-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-sm text-slate-600 font-medium">Address</div>
          <input
            type="text"
            className="w-full p-1 rounded-md border border-gray-300"
          />
        </div>

        <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-200"></hr>

        <div className="flex justify-end gap-6">
          <button className="py-1 px-2 rounded-md border border-gray-300 bg-white">
            Cancel
          </button>
          <button className="py-1 px-2 rounded-md border border-blue-500 bg-blue-500 text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
