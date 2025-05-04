import React, { useEffect, useRef, useState } from "react";

const Focus = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleInputField = (e, keyValue) => {
    setInputs((prev) => ({ ...prev, [keyValue]: e }));
  };

  console.log(inputs);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!inputs.name.trim()){
        nameRef.current.focus();
        return;
    }

    if(!inputs.email.trim()){
        emailRef.current.focus();
        return;
    }

    if(!inputs.password.trim()){
        passwordRef.current.focus();
        return;
    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-100 mx-auto my-10 p-4 rounded-2xl bg-amber-50 shadow-2xl"
    >
      <div className="mb-2">
        <label className="font-medium">Enter Name</label>
        <input
          className="w-full border-1 rounded-sm py-1 px-2"
          type="text"
          ref={nameRef}
          value={inputs.name}
          onChange={(e) => handleInputField(e.target.value, "name")}
        />
      </div>
      <div className="mb-2">
        <label className="font-medium">Enter Email</label>
        <input
          className="w-full border-1 rounded-sm py-1 px-2"
          type="text"
          ref={emailRef}
          value={inputs.email}
          onChange={(e) => handleInputField(e.target.value, "email")}
        />
      </div>
      <div className="mb-2">
        <label className="font-medium">Enter Password</label>
        <input
          className="w-full border-1 rounded-sm py-1 px-2"
          type="password"
          ref={passwordRef}
          value={inputs.password}
          onChange={(e) => handleInputField(e.target.value, "password")}
        />
      </div>
      <div className="text-center mt-4">
        <button
          type="submit"
          className="bg-green-400 p-1 font-medium w-20 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Focus;
