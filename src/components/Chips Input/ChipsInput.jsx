import { useState } from "react";

function ChipsInput() {
  const [inputVal, setInputVal] = useState("");

  const [valArray, setArrayVal] = useState([]);

  const handleOnchange = (e) => {
    setInputVal(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setArrayVal((prev) => [...prev, inputVal]);
      setInputVal("");
    }
  };

  const handleDelete = (itemToDelete) => {
    const filteredItem = valArray.filter((item) => item !== itemToDelete);
    setArrayVal(filteredItem);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={inputVal}
        onChange={(e) => handleOnchange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {valArray.map((item) => (
        <span key={item}>
          {item}
          <span className="cursor-pointer" onClick={() => handleDelete(item)}>❌</span>
        </span>
      ))}
    </div>
  );
}

export default ChipsInput;
