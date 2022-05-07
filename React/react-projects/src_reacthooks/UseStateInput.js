import React, { useState } from "react";
const StateInput = () => {
  const [location, setLocation] = useState("Noida");

  return (
    // why this is className istead of class?                           //because we are in js and class is a reserved keyword

    <div className="search-input">
      <h1>useState Example </h1>
      <form htmlFor="location">
        <input
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Enter"
        />
      </form>
    </div>
  );
};

export default StateInput;
