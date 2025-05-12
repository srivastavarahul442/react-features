import React from "react";

const CheckBoxes = ({ data, checked, setChecked }) => {
  const handleOnChange = (isChecked, item) => {
    setChecked((prev) => {
      let newState = { ...prev, [item.id]: isChecked };

      //if parent is selected children should also be selected
      const updateChildren = (item) => {
        item.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };

      updateChildren(item);

      //if all children are checked, mark parent as checkek
      const verifyChecked = (item) => {
        const allChildrenChecked = item?.children?.every((child)=>child.id===isChecked);
        if(allChildrenChecked) newState = {...prev,[item.id]:isChecked}
      }
      data.forEach((item)=>verifyChecked(item))

      return newState;
    });
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="ml-5">
          <input
            type="checkbox"
            checked={checked[item.id] || false}
            onChange={(e) => handleOnChange(e.target.checked, item)}
          />{" "}
          <span>{item.name}</span>
          {item.children && (
            <CheckBoxes
              data={item.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckBoxes;
