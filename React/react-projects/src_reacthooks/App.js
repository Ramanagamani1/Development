import "./styles.css";
import Theme from "./ThemeContext";
import Counter from "./CounterState";
import StateInput from "./UseStateInput";
import Effect from "./Effect";
import Context from "./Context";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <StateInput />
      <Effect />
      <Theme />
      <Context />
    </div>
  );
}
