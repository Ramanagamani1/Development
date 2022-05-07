import { useState, useMemo } from "react";

// on render if n = prev n it will not run again it will return the previously computed value
const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  // const fib = fibonacci(num);

  const fib = useMemo(() => fibonacci(num), [num]);

  // useMemo is used for memoisation ->  (() = > fuction(arg), [dependancy array])
  // useMemo -> input -> depend array's value has not changed
  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useMemo Example
      </h1>
      <h2>
        Fibonacci of {num} is {fib}
      </h2>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </div>
  );
};

export default MemoComponent;
