
const initialState = {
  list: [
    {
      uid: '90',
      value: 'bangun tidur'
    }
  ],
  //... misal ada 10 property lain
}

export default function todoReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case 'todo/add':
      return {
        ...state,
        list: [...state.list, payload]
      }
    case 'todo/delete':
      const temp = [ ...state.list ]; // const temp = state.list.slice();
      const result = temp.filter((val) => val.uid !== payload);
      return {
        ...state,
        list: result
      }
    default:
      return state;
  }
}
