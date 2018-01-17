import React, { Component } from 'react'

import { Modal } from './Modal.jsx'
import { Backdrop } from './Backdrop.jsx'

import './app.scss'

export class QuickAccess extends Component {
  constructor (props) {
    super(props)
    this.state = { }

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

        {
          this.state.showModal &&
            <Backdrop clicked={this.hide} />
        }
        {
          this.state.showModal && (
            <Modal
              placeholder={this.props.placeholder}
              source={this.props.source}
              sourceType={this.props.sourceType || 'plain'}
              onHide={this.hide}
            />
          )
        }
      </div>
    )
  }
}
