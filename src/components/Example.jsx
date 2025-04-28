import React, { useState } from "react";

export const Example = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const countriesName = ["india", "nepal"];

  const countriesStates = {
    state:{}
  };

  const handleCountry = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div>
      <select
        onChange={handleCountry}
        className="h-8 w-30 border-2 border-black"
      >
        <option>select Country</option>
        {countriesName.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </select>

      {selectedCountry && countriesStates[selectedCountry] && (
        <select className="h-8 w-30 border-2 border-black">
          {countriesStates[selectedCountry].map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>
      )}
    </div>
  );
};
