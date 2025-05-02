import React, { useRef, useState } from "react";

const Example = () => {
  const countOfOTP = 6;
  const [inputArray, setInputArray] = useState(new Array(countOfOTP).fill());

  const refArray = useRef();
  console.log(refArray)

  const handleOnChange = (e,index) => {
    if(isNaN(e)) return
    const newArray = [...inputArray];
    newArray[index]=e.slice(-1);
    setInputArray(newArray)
  }



  return (
    <div className="w-[20%] mx-auto my-10">
      <h1 className="ml-15">OTP Varification</h1>
      <div className="mt-5">
        {inputArray.map((value, index) => (
          <input
          ref={refArray}
            className="h-10 w-10 border-1 items-center text-center border-black"
            value={inputArray[index]}
            key={index}
            onChange={(e)=>handleOnChange(e.target.value,index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Example;
