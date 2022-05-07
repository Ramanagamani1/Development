import React, { useState, useEffect, useRef } from "react";

const PrevStateRef = () => {
  const [name, setName] = useState("");
  const prevName = useRef();
  useEffect(() => {
    prevName.current = name;
  });
  return (
    <div>
      <input
        value={name}
        placeholder="Input"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      my current name is {name}
      <br />
      my previous name was {prevName.current}
    </div>
  );
};

export default PrevStateRef;
