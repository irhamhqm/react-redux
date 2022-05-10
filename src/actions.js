
const incrementAction = {
  type: 'increment-count', // COUNT/INCREMENT
}

const decrementAction = {
  type: 'decrement-count', // COUNT/INCREMENT
}

const setCounterAction = (num) => ({
  type: 'set-count',
  payload: num
})

export {
  incrementAction,
  decrementAction,
  setCounterAction
}
