
const incrementAction = {
  type: 'increment-count', // COUNT/INCREMENT
};

const decrementAction = {
  type: 'decrement-count', // COUNT/INCREMENT
};

const setCounterAction = (num) => ({
  type: 'set-count',
  payload: num
});

const addTodoAction = (payload) => ({
  type: 'todo/add',
  payload
});

const deleteTodoAction = (index) => ({
  type: 'todo/delete',
  payload: index
})

export {
  incrementAction,
  decrementAction,
  setCounterAction,
  addTodoAction,
  deleteTodoAction
}
