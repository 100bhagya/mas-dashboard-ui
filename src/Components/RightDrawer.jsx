import React, { useEffect, useState } from "react";
import "../App.css"




export default function RightDrawer({
  children,
  isOpen,
  setIsOpen,
  width = "80vw",
}) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isBeforeMay152023 = currentDate < new Date('2023-05-15');
  return (
   
      <div
        className={
          "fixed overflow-auto z-30 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <div
          className={
            `h-full ${width} right-0 absolute bg-white shadow-xl delay-400 duration-500 ease-in-out transition-all transform ` +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <div className="relative w-[80vw] flex flex-col space-y-6 overflow-y-scroll h-full">
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
