const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'action/Added': {
       state = [...state, { id: action.payload.id, text: action.payload.text, }]
       console.log(state)
      return (state)
    }
    case 'action/Deleted': {
      return state.filter(todo => todo.id !== action.payload)
    }
    case 'action/Edit': {
      return state
    }
    case 'action/Save': {
      return state
    }
    default:
      return state
  }
}