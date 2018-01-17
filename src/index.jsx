import React, { Component } from 'react'

// import { Modal } from './LookupModal'
import { Backdrop } from './Backdrop.jsx'

export class QuickAccess extends Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }

  show () {
    this.setState({ showModal: true })
  }

  hide () {
    this.setState({ showModal: false })
  }

  render () {
    return (
      <div
        className='quick-access'
        onClick={this.show}
      >
        {this.props.children}

        { this.state.showModal && <Backdrop onClick={this.hide} /> }
        { /* this.state.showModal && <LookupModal onHide={this.hide} key={'lookup-modal'} /> */ }
      </div>
    )
  }
}
