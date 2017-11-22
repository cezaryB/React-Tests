import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }
  renderCommentList() {
    if (this.props.comments.length > 0) {
      return this.props.comments.map((comment,index) => {
        return <li key={index}>{comment}</li>
      })
    }
  }
  render() {
    return (
      <ul className='comment-list'>
        {this.renderCommentList()}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps)(CommentList)
