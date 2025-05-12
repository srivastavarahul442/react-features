import React, { useState } from "react";
import CheckBoxes from "./CheckBoxes";

const NestedCheckboxs = () => {

    const [checked, setChecked] = useState({})

    console.log(checked)

  const checkboxesData = [
    {
      id: 1,
      name: "Fruits",
      children: [
        {
          id: 2,
          name: "Citrucs",
          children: [
            { id: 3, name: "Orange" },
            { id: 4, name: "Lemon" },
          ],
        },
        {
          id: 5,
          name: "Berries",
          children: [
            { id: 6, name: "Strawberry" },
            { id: 7, name: "Blueberry" },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Tropical",
      children: [
        { id: 9, name: "Mango" },
        { id: 10, name: "Banana" },
      ],
    },
    { id: 11, name: "Apple" },
  ];

  return (
    <div>
      <h1 className="text-center">Nested Checkboxes</h1>
        <CheckBoxes data = {checkboxesData} checked={checked} setChecked={setChecked} />
    </div>
  );
};

export default NestedCheckboxs;
