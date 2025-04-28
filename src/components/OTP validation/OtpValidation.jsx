import React, { useEffect, useRef, useState } from "react";

const OtpValidation = () => {
  const OTP_DIGITS_COUNT = 4;

  const refArray = useRef([]);

  const [inputArr, setInputArray] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    console.log(value);
    const newVal = value.trim();
    const newArray = [...inputArr];
    newArray[index] = newVal.slice(-1);
    setInputArray(newArray);

    newVal && refArray.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArray.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    refArray.current[0]?.focus();
  }, []);

  return (
    <div>
      <h1 className="flex justify-center text-2xl mt-5">OTP Validation</h1>
      <div className="w-[18%] mx-auto my-10 flex justify-between">
        {inputArr.map((input, index) => (
          <input
            type="text"
            key={index}
            className="h-10 text-center w-10 rounded-[0.5rem] border-1 border-black"
            value={inputArr[index]}
            ref={(e) => (refArray.current[index] = e)}
            onChange={(e) => {
              handleOnChange(e.target.value, index);
            }}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OtpValidation;
