
import { connect } from "react-redux";
import { incrementAction } from "./actions";
import Foo from "./Foo";

function App(props) {
  return (
    <div className="App">
      counter: {props.count}
      <button onClick={() => { props.incrementCount() }}>increment</button>
      <Foo />
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch, state) => ({
  incrementCount: () => { dispatch(incrementAction) }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
