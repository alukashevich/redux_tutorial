import { combineReducers } from 'redux'
import page from './page.reducer'
import user from './user.reducer'

export default combineReducers({
  page,
  user
})