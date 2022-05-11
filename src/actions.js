import axios from "axios";

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
});

const fetchPostStart = {
  type: 'post/fetch-start'
}

const fetchPostSuccess = (payload) => ({
  type: 'post/fetch-success',
  payload
});

const fetchPostFailed = (payload) => ({
  type: 'post/fetch-failed',
  payload
})

const fetchPostAsync = () => {
  return function(dispatch, getState) {
    dispatch(fetchPostStart);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // console.log(response);
        dispatch(fetchPostSuccess(response.data));
      })
      .catch((error) => {
        // handle error di sini
        dispatch(fetchPostFailed(error));
      });
  }
}

export {
  incrementAction,
  decrementAction,
  setCounterAction,
  addTodoAction,
  deleteTodoAction,
  fetchPostAsync
}
