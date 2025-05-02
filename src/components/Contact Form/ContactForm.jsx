import React, { useState } from "react";

const ContactForm = () => {
  const initialValue = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialValue);

  const [error, seterror] = useState(initialValue);

  const [showThanksMessage, setShowThanksMessage] = useState(false);

  const handleOnchange = (keyName, value) => {
    setFormData((prev) => ({ ...prev, [keyName]: value }));
  };

  const checkForBlankField = () => {
    if (formData.name === "") {
      seterror((prev) => ({ ...prev, name: "Name is required" }));
    }
    if (formData.email === "") {
      seterror((prev) => ({ ...prev, email: "Email is required" }));
    }
    if (formData.message === "") {
      seterror((prev) => ({ ...prev, message: "Message is required" }));
    }
    if (formData.email !== "") {
      const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email);
      if (!emailRegex) {
        seterror((prev) => ({ ...prev, email: "Invalid email format" }));
      }
    }
  };

  const resetErrorMessage = () => {
    seterror(initialValue);
  };

  const handleFormSubmit = (e) => {
    resetErrorMessage();
    e.preventDefault();

    checkForBlankField();
    console.log(formData);

    if (error.name === "" && error.email === "" && error.message === "") {
      setShowThanksMessage(true);
    }
  };

  return showThanksMessage ? (
    <h1 className="w-[15%] mx-auto my-10 text-2xl font-bold">Thank you, {formData.name}!</h1>
  ) : (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="w-[40%] border-1 p-8 mt-10 rounded-xl border-black shadow-2xl mx-auto"
      >
        <div className="mb-4">
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={formData.name}
            className="w-[100%] h-9 border-1 border-black"
            onChange={(e) => handleOnchange("name", e.target.value)}
          />
          <p className="text-red-400">{error.name}</p>
        </div>
        <div className="mb-4">
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={formData.email}
            className="w-[100%] h-9 border-1 border-black"
            onChange={(e) => handleOnchange("email", e.target.value)}
          />
          <p className="text-red-400">{error.email}</p>
        </div>
        <div className="mb-4">
          <label>Message:</label>
          <br />
          <textarea
            value={formData.message}
            className="w-[100%] border-1 border-black"
            onChange={(e) => handleOnchange("message", e.target.value)}
          />
          <p className="text-red-400">{error.message}</p>
        </div>
        <button
          type="submit"
          className="w-[100%] h-10 mt-2 rounded-[5px] text-white bg-blue-500 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
