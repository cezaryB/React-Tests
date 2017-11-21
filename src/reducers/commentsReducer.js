import { SAVE_COMMENT } from '../actions/types'

const INITIAL_STATE = {
  comments: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return { ...state, ...state.comments.push(action.payload)}
    default:
      return state
  }
}
