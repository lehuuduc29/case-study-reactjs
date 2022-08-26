import { combineReducers } from 'redux'
import reducer from './todosReducer'

const rootReducer = combineReducers({
  actions: reducer,
})

export default rootReducer