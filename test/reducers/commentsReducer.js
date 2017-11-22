import { expect } from '../test_helper'
import commentsReducer from '../../src/reducers/commentsReducer'
import { SAVE_COMMENT } from '../../src/actions/types'

describe('Comments Reducer', () => {

  it('handles action with unknown type', () => {
    const action = { type: 'SOME_TYPE', payload: 'UGACHAKA'}
    expect(commentsReducer([], action)).to.eql([])
  })

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment'}
    expect(commentsReducer([], action)).to.eql(['new comment'])
  })

})
