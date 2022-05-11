const initialState = {
  list: [],
  loading: false,
  error: ''
}

export default function postReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case 'post/fetch-start':
      return {
        ...state,
        loading: true
      }
    case 'post/fetch-success':
      return {
        ...state,
        loading: false,
        list: payload,
        error: ''
      }
    case 'post/fetch-failed':
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state;
  }
}
