import React from 'react'
import ReactDOM from 'react-dom'

export function Backdrop ({ onClick }) {
  return ReactDOM.createPortal(
    <div className='backdrop show' onClick={onClick} />
    , document.body
  )
}
