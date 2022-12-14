import React from "react";

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <div
      className={
        "fixed overflow-auto z-10 bg-opacity-25 inset-0 transform ease-in-out h-full" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 -translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <div
        className={
          "w-[60vw] left-0 absolute bg-white shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " -translate-x-0 " : " -translate-x-full ")
        }
      >
        <div className="bg-blue-100 md:bg-white relative flex flex-col space-y-6 overflow-y-scroll h-full">
          {children}
        </div>
      </div>
      <div
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
    </div>
  );
}
