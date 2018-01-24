import React from 'react'
import ReactDOM from 'react-dom'

export class Modal extends React.Component {
  constructor (props) {
    super(props)
    this.state = { items: [] }
    this.typed = debounce(this.typed.bind(this), 500)
    this.keyUp = this.keyUp.bind(this)
    this.selected = this.selected.bind(this)
  }

  componentDidMount () {
    this.input.focus()
  }

  typed (value) {
    if (!value) {
      this.setState({ items: [] })
      return
    }

    const { source } = this.props

    source(value)
      .then((items) => {
        this.setState({
          items,
          activeKey: items[0].key
        })
      })
  }

  keyUp ({ ctrlKey, keyCode }) {
    if (keyCode === 27) {
      this.props.onHide() // Esc
    }
    if (keyCode === 38) { // Up
      const { activeKey, items } = this.state
      const activeInd = items.findIndex(item => item.key === activeKey)
      const newInd = activeInd < 1 ? items.length - 1 : (activeInd - 1)
      this.setState({ activeKey: items[newInd].key })
    }
    if (keyCode === 40) { // Down
      const { activeKey, items } = this.state
      const activeInd = items.findIndex(item => item.key === activeKey)
      const newInd = activeInd >= (items.length - 1) ? 0 : (activeInd + 1)
      this.setState({ activeKey: items[newInd].key })
    }
    if (keyCode === 13) { // Enter
      const { activeKey, items } = this.state
      const activeInd = items.findIndex(item => item.key === activeKey)
      this.selected(items[activeInd])
    }
    if (ctrlKey && (keyCode >= 49 && keyCode <= 57)) { // from 1 to 9
      const { items } = this.state
      this.selected(items[keyCode - 49])
    }
  }

  selected (item) {
    this.props.selected(item)
  }

  render () {
    const { items, activeKey } = this.state
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
                    items.map((i, ind) => (
                      <div
                        onClick={() => this.selected(i)}
                        className={`quick-access-item ${activeKey === i.key ? 'active' : ''}`}
                        key={i.key}
                      >
                        <div className='quick-access-image'>
                          <img src={i.imageUrl} />
                        </div>
                        <div className='quick-access-label'> { i.text } </div>
                        <div className='quick-access-handler'> { `ctrl + ${ind + 1}` } </div>
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

function debounce (callback, wait, context = this) {
  let timeout = null
  let callbackArgs = null

  const later = () => callback.apply(context, callbackArgs)

  return function () {
    callbackArgs = arguments
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
