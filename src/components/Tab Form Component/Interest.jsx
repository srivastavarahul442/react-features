import React from "react";

const Interest = () => {
  const interestOption = ["Cricket", "Music", "Football"];

  return (
    <div className="p-4 bg-green-100 rounded-2xl shadow-2xl mt-2">
      <div>
        {interestOption.map((interest) => (
          <div className=" ">
            <input type="checkbox" className=""  />
            <span className="ml-4">{interest}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interest;
