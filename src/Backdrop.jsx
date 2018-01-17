import React from 'react'
import ReactDOM from 'react-dom'

export function Backdrop ({ clicked }) {
  return ReactDOM.createPortal(
    <div className='quick-access-backdrop' onClick={clicked} />
    , document.body
  )
}
