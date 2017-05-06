import {SET_ACTIVE_MENU} from '../constants/actionTypes'

const activeMenu = menu => ({
  type: SET_ACTIVE_MENU,
  menu: menu
})

export const setActiveMenu = menu => {
  return dispatch => {
    dispatch(activeMenu(menu))
  }
}
