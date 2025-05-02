import React, { useState } from "react";
const MultipleDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const countriesName = ["india", "nepal", "bhutan", "srilanka"];

  const countriesStates = {
    india: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
    ],
    nepal: ["Province No. 1", "Madhesh Province", "Bagmati Province"],
    bhutan: [
      "Bumthang",
      "Chukha",
      "Dagana",
      "Gasa",
      "Haa",
      "Lhuntse",
      "Mongar",
      "Paro",
    ],
    srilanka: ["Central Province", "Eastern Province", "Northern Province"],
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelectedCountry(e.target.value);
  };

  const handleSelect2 = (e) => {
    console.log(e.target.value);
    setSelectedState(e.target.value);
  };

  return (
    <div>
      <select className="border-2 border-black" onChange={handleSelect}>
        <option>select State</option>
        {countriesName.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </select>
      {selectedCountry && countriesStates[selectedCountry] && (
        <select className="border-2 border-black" onChange={handleSelect2}>
          {countriesStates[selectedCountry].map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>
      )}

      <p className="text-xl font-bold mt-5">
        User country is {selectedCountry} and state is {selectedState}{" "}
      </p>
    </div>
  );
};

export default MultipleDropdown;
