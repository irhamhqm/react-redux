
import { useDispatch, useSelector } from "react-redux";
import { incrementAction } from "./actions";
import Foo from "./Foo";
import Todo from "./Todo";

function App() {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* counter: {counter}
      <button onClick={() => { dispatch(incrementAction) }}>increment</button>
      <Foo /> */}
      <Todo />
    </div>
  );
}

export default App;
