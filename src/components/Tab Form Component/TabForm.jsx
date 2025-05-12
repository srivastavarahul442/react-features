import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";

export const TabForm = () => {
  const tabOptions = [
    { id: 1, tab: "Profile" },
    { id: 2, tab: "Interest" },
    { id: 3, tab: "Setting" },
  ];
  const [tab, setTab] = useState("Profile");

  const handleClick = (id) => {
    const tabItem = tabOptions.find((item) => item.id === id);
    setTab(tabItem.tab);
  };

  const handleNextClick = () => {
    const tabItem = tabOptions.find((item) => item.tab === tab);
    const Item = tabItem.id + 1;
    const filteredItem = tabOptions.find((item) => item.id === Item);
    tabOptions.length >= filteredItem.id && setTab(filteredItem.tab);
  };

  const handlePrevClick = () => {
    console.log("hello")
    const tabItem = tabOptions.find((item) => item.tab === tab);
    const Item = --tabItem.id;
    const filteredItem = tabOptions.find((item) => item.id === Item);
    tabOptions.length >= filteredItem.id && setTab(filteredItem.tab);
  };

  return (
    <div className=" mx-auto w-[40%]">
      <div className=" mt-10 shadow-2xl rounded-2xl mx-auto w-full px-5 pb-10 ">
        <h1 className="my-5 text-2xl font-bold text-center">TabForm</h1>
        <div>
          {tabOptions.map((item) => (
            <button
              className="bg-green-400 cursor-pointer h-8 w-24 mr-2 px-1 rounded-xl"
              key={item.id}
              value={item.tab}
              onClick={() => handleClick(item.id)}
            >
              {item.tab}
            </button>
          ))}
        </div>
        {tab === "Profile" && <Profile />}
        {tab === "Interest" && <Interest />}
        {tab === "Setting" && <Setting />}
        {tab === "Setting" && (
          <div className="flex justify-end mt-15">
            <button className="bg-green-400 cursor-pointer h-8 w-24 mr-2 px-1 rounded-xl">
              Submit
            </button>
          </div>
        )}
      </div>
      <div className="text-center mt-3">
        <button
          onClick={handlePrevClick}
          className="bg-green-400 cursor-pointer h-8 w-24 mr-2 px-1 rounded-xl"
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          className="bg-green-400 cursor-pointer h-8 w-24 mr-2 px-1 rounded-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};
