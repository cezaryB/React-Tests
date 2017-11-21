import { renderComponent, expect } from '../test_helper'
import CommentList from '../../src/components/comment_list'

describe('Comment List', () => {
  let component

  beforeEach(() => {
    const props = { comments: ['hello world', 'comment no 2'] }
    component = renderComponent(CommentList, null, props)
  })

  it('has a comment list', () => {
    expect(component).to.have.class('comment-list')
  })

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2)
  })

  it('shows each comment that is provided', () => {
    expect(component).to.contain('hello world')
    expect(component).to.contain('comment no 2')
  })
})
