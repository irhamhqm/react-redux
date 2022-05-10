import { useState } from "react";

import { connect } from "react-redux";
import { decrementAction, setCounterAction } from "./actions";

function Foo(props) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.set(input);
  }

  return (
    <div>
      Foo<br/>
      counter: {props.count}
      <button onClick={() => { props.decrement() }}>decrement</button>
      <form onSubmit={handleSubmit}>
        <input type="number" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type="submit">set</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch, state) => ({
  decrement: () => { dispatch(decrementAction) },
  set: (num) => { dispatch(setCounterAction(num)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Foo);
