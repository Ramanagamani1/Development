import "./styles.css";
import Ref from "./Ref";
import Prev from "./PrevStateRef";
import Memo from "./Memo";

export default function App() {
  return (
    <div className="App">
      <Memo />
      <Prev />
      <Ref />
    </div>
  );
  // 1.use Ref -> doest not kicks re render
  // 2. use Ref -> Access DOM element
  // 3. use Ref -> Contains the previous state. (returns get printed, useEffect updates the value but doesnt reflect on the DOM because useRef does not re renders
  //) on re render it takes that evaluated value and prints it and then did mount side effects runs -> again gets compputed =

  // useMemo -> memoisation do fib function memo.
}
