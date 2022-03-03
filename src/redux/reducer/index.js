/*
 * 通过分发的方式更新定义的状态
 * 
 */
import * as ActionTypes from '../actions/actionTypes'

export default (state, action) => {
  const { counterCaption, type } = action
  let newState = {}
//   console.log('counterCaption, type',counterCaption, type)
  switch (type) {
    case ActionTypes.ISLOGIN:
      newState = { ...state, [type]: counterCaption }
      break
    case ActionTypes.USERINFO:
      newState = { ...state, [type]: counterCaption }
      break
    case ActionTypes.AUTHORIZATION:
      newState = { ...state, [type]: counterCaption }
      break
    case ActionTypes.CURRENTINDEX:
      newState = { ...state, [type]: counterCaption }
      break
    case ActionTypes.NAVTOGGLE:
      newState = { ...state, [type]: counterCaption }
      break
    default:
      newState = state
  }
  // 持久化store，防止刷新状态丢失
  localStorage.setItem('store', JSON.stringify(newState))
  return newState
}
