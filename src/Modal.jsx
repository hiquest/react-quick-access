import React from 'react'
import ReactDOM from 'react-dom'

// const { _ } = window

export class Modal extends React.Component {
  constructor (props) {
    super(props)
    this.state = { items: [] }
    this.typed = this.typed.bind(this)
    this.keyUp = this.keyUp.bind(this)
    this.selected = this.selected.bind(this)
  }

  componentDidMount () {
    this.input.focus()
  }

  typed (value) {
    if (value) {
      const items = this.props
        .source
        .filter(x => x.indexOf(value) > -1)
      this.setState({ items })
    } else {
      this.setState({ items: [] })
    }
  }

  keyUp ({ keyCode }) {
    if (keyCode === 27) this.props.onHide()
  }

  selected () {

  }

  render () {
    const { items } = this.state
    return ReactDOM.createPortal(
      <div className='quick-access-modal'>
        <div className='modal-dialog'>
          <div className='page-search'>
            <div className='input-wrapper'>
              <input
                disabled={this.state.saving}
                type='search'
                placeholder={this.props.placeholder || 'Type to search'}
                onChange={({ target: { value } }) => this.typed(value)}
                ref={el => this.input = el}
                onKeyUp={this.keyUp}
              />
            </div>
            {
              items && items.length > 0 &&
                <div className='quick-access-results open'>
                  {
                    items.map(i => (
                      <div onClick={() => this.selected(i)} className='item' key={i.id}>
                        { i }
                      </div>
                    ))
                  }
                </div>
            }
          </div>
        </div>
      </div>
      , document.body
    )
  }
}
