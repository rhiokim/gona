import {FETCH_CONFIG} from '../constants/actionTypes'
import {setConfig, loadConfig} from '../store'

const loadedConfig = config => ({
  type: FETCH_CONFIG,
  config: config
})

export const fetchConfig = () => {
  return dispatch => {
    const config = loadConfig()
    dispatch(loadedConfig(config))
  }
}

export const putConfig = (key, value) => {
  return dispatch => {
    setConfig(key, value)
  }
}
