import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrementAction, setCounterAction } from "./actions";

function Foo() {
  const [input, setInput] = useState('');
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCounterAction(input));
    setInput('');
  }

  return (
    <div>
      Foo<br/>
      counter: {counter}
      <button onClick={() => { dispatch(decrementAction) }}>decrement</button>
      <form onSubmit={handleSubmit}>
        <input type="number" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type="submit">set</button>
      </form>
    </div>
  )
}



export default Foo;
