import React, { useContext, createContext } from "react";
import { userContext } from "./Context";
const LevelFive = () => {
  // const userContext = createContext([
  //   {
  //     firstName: "meghna",
  //     secondName: "yadav",
  //     suffix: 1,
  //     email: "meghna.yadav@scaler.com"
  //   },
  //   (obj) => obj
  // ]);

  const [user, setUser] = useContext(userContext);

  return (
    <div>
      <h5>level 5</h5>
      <div> {user.firstName} </div>
      {`${user.firstName} ${user.secondName} ${user.suffix} the great was born`}
      <br />
      <button
        onClick={() => {
          setUser(Object.assign({}, user, { suffix: user.suffix + 1 }));
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default LevelFive;
