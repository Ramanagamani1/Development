import React, { useState, useContext, createContext } from "react";
import LevelFive from "./LevelFive";
export const userContext = createContext([
  {
    firstName: "meghna",
    secondName: "yadav",
    suffix: 1,
    email: "meghna.yadav@scaler.com"
  },
  (obj) => obj
]);

// gave a deafult object, if the provider doesnot have any state
// this object will be used as the default value

// const LevelFive = () => {
//   const [user, setUser] = useContext(userContext);

//   return (
//     <div>
//       <h5>level 5</h5>
//       <div> {user.firstName} </div>
//       {`${user.firstName} ${user.secondName} ${user.suffix} the great was born`}
//       <br />
//       <button
//         onClick={() => {
//           setUser(Object.assign({}, user, { suffix: user.suffix + 1 }));
//         }}
//       >
//         Increment
//       </button>
//     </div>
//   );
// };

const LevelFour = () => (
  <div>
    <h4> Level 4</h4>
    <LevelFive />
  </div>
);

const LevelThree = () => (
  <div>
    <h3> Level 3</h3>
    <LevelFour />
  </div>
);

const LevelTwo = () => (
  <div>
    <h2> Level 2</h2>
    <LevelThree />
  </div>
);

const ContextComponent = () => {
  // a value, an updater function.
  const userState = useState({
    firstName: "nagamani",
    secondName: "pasagadugula",
    suffix: 1,
    email: "iron.man@marvel.com"
  });
  return (
    <userContext.Provider value={userState}>
      <>
        <h1> First Level </h1>
        <LevelTwo />
      </>
    </userContext.Provider>
  );
};

export default ContextComponent;
