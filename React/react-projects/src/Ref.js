import React, { useState, useEffect, useRef } from "react";
import { render } from "react-dom";

// useRef -> returns the same obj there is no change in the object's ref and hence no re renders on call useRef
const Ref = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const renderVal = useRef(0);
  // an object

  useEffect(() => {
    renderVal.current = renderVal.current + 1;
  });
  // useEfFect () setValue()
  // [value]
  // didmount -> what happens after I gets mounted

  function focus() {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.value = "Meghna";
    setValue("meghnaaaaa");
  }
  // refs are also used to access DOM?
  // if you pass a ref obj, to a react element
  // it will set it's .current to the corresponding DOM
  // document query selector

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="input here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      The value that got entered is {value}
      <br />
      <button onClick={focus}>Focus</button>
      <br />
    </div>
  );
};

export default Ref;
