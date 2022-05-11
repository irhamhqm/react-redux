import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, deleteTodoAction } from "./actions";

let uid = 0;

export default function Todo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.list)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoAction({ uid, value: input }));
    setInput('');
    uid++;
  }
  
  return (
    <div>
      <h2>Todo App</h2>
      <ol>
        {todos.map((todo) => (
          <li key={todo.uid}>
            {todo.value}&nbsp;&nbsp;&nbsp;
            <button onClick={() => { dispatch(deleteTodoAction(todo.uid)) }}>delete</button>
          </li>
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <label>
          add new todo
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        </label>
        <button type="submit">add</button>
      </form>
    </div>
  )
}