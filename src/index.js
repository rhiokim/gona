import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createLogger} from 'redux-logger'
import {ipcRenderer, shell} from 'electron'

import {loadState} from './store'
import rootReducer from './reducers'

import App from './container/app'

const initialState = loadState()

const logger = createLogger({
  collapsed: true
})

let store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

store.subscribe(() => {
  console.log(store.getState())
})

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

window.onload = function () {
  ReactDOM.render(<Main />, document.getElementById('app'))
}
// document.addEventListener('click', event => {
//   if (event.target.href) {
//     // Open links in external browser
//     shell.openExternal(event.target.href)
//     event.preventDefault()
//   } else if (event.target.classList.contains('show-devtool-action')) {
//     ipcRenderer.send('show-devtool')
//   } else if (event.target.classList.contains('js-quit-action')) {
//     window.close()
//   }
// })
