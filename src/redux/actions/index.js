/*
 * 定义通过分发的方式更新状态的函数
 * 
 */
import * as ActionTypes from './actionTypes'

export const isLogin = (counterCaption) => {
  return {
    type: ActionTypes.ISLOGIN,
    counterCaption: counterCaption,
  }
}

export const userInfo = (counterCaption) => {
  return {
    type: ActionTypes.USERINFO,
    counterCaption: counterCaption,
  }
}

export const authorization = (counterCaption) => {
  return {
    type: ActionTypes.AUTHORIZATION,
    counterCaption: counterCaption,
  }
}

export const currentIndex = (counterCaption) => {
  return {
    type: ActionTypes.CURRENTINDEX,
    counterCaption: counterCaption,
  }
}

export const navToggle = (counterCaption) => {
  return {
    type: ActionTypes.NAVTOGGLE,
    counterCaption: counterCaption,
  }
}
