import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());
  // const [data, getFetchedData] = useState({firstName: "meghna"});

  useEffect(() => {
    // api(active)
    // logic to fetch the data
    // console.log("I am here");
    const timer = setTimeout(() => setTime(new Date()), 1000);

    return () => clearTimeout(timer);
  }, [time]);
  // didmount
  // didUpdate ->
  // didunmount

  useEffect(() => {}, []);
  // dependancy array

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
