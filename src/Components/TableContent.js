import React from "react";

const TableContent = ({ name }) => {
  const buddy = [
    { id: 1, name: "Dog" },
    { id: 2, name: "Bird" },
    { id: 3, name: "Cat" },
    { id: 4, name: "Mouse" },
    { id: 6, name: "Horse" },
    { id: 7, name: "Horse" },
    { id: 8, name: "Horse" },
    { id: 9, name: "Horse" },
  ];
  const mentor = [
    { id: 1, name: "Dog" },
    { id: 2, name: "Bird" },
  ];

  if (name == "buddy")
    return (
      <div className="rounded-lg shadow-xl basis-1/2">
        <div className="text-xl text-[#2255B8] text-center py-2 border-b-2 border-[#2255B8]">
          {" "}
          Buddy{" "}
        </div>

        <div className="px-6 py-4">
          <table className="table-auto w-full  py-2 px-4">
            <tbody className="px-2 py-4">
              <tr className="text-[#2255B8] text-lg">
                <td>S.no</td>
                <td>Name</td>
                <td>Contact</td>
                <td>Status</td>
              </tr>
              {buddy.map((a) => (
                <tr className="py-2">
                  <td> {a.id}</td>
                  <td> {a.name}</td>
                  <td> {a.name}</td>
                  <td>
                    {" "}
                    <input type="checkbox"></input>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  else
    return (
      <div className="rounded-lg shadow-xl basis-1/2 h-fit">
        <div className="text-xl text-[#2255B8] text-center py-2 border-b-2 border-[#2255B8]">
          {" "}
          Buddy{" "}
        </div>

        <div className="px-6 py-4">
          <table className="table-auto w-full  py-2 px-4">
            <tbody className="px-2 py-4">
              <tr className="text-[#2255B8] text-lg">
                <td>S.no</td>
                <td>Name</td>
                <td>Contact</td>
                <td>Status</td>
              </tr>
              {mentor.map((a) => (
                <tr className="py-2">
                  <td> {a.id}</td>
                  <td> {a.name}</td>
                  <td> {a.name}</td>
                  <td>
                    {" "}
                    <input type="checkbox"></input>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default TableContent;
