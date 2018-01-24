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
    this.selected = this.selected.bind(this)
  }

  show (e) {
    this.setState({ showModal: true })
  }

  hide () {
    this.setState({ showModal: false })
  }

  selected (item) {
    this.hide()
    this.props.selected(item)
  }

  render () {
    return (
      <span
        className='quick-access'
      >
        <span onClick={this.show}>
          {this.props.children}
        </span>

        {
          this.state.showModal &&
            <Backdrop clicked={this.hide} />
        }
        {
          this.state.showModal && (
            <Modal
              placeholder={this.props.placeholder}
              source={this.props.source}
              onHide={this.hide}
              selected={this.selected}
            />
          )
        }
      </span>
    )
  }
}
