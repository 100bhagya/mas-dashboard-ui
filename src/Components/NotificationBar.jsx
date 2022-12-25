import React from "react";

const NotificationBar = () => {
  return (
    <div>
      <div className="flex gap-1 justify-between p-4  md:flex-row flex-col border-b ">
        <h3 className="md:text-xl text-lg"> Case Study </h3>
        <h3 className="md:text-md text-sm py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h3>
        <h3 className="md:text-md text-sm text-rose-400 ">22 Nov 2023</h3>
      </div>
    </div>
  );
};

export default NotificationBar;
