import React, { Component } from 'react'

export class QuickAccess extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='wrapper'>
        {this.props.children}
      </div>
    )
  }
}
