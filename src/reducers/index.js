import {combineReducers} from 'redux'

import App from './app'
import Tasks from './tasks'

const rootReducer = combineReducers({
  App,
  Tasks
})

export default rootReducer
