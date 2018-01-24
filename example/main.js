const { QuickAccess } = window.ReactQuickAccess
const { ReactDOM, React, fetch } = window

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
    this.source = this.source.bind(this)
    this.selected = this.selected.bind(this)
  }

  source (term) {
    const url = `/api/name/${term}`
    return fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(x => x.json())
      .then(arr => arr.map(convertItem))
  }

  selected (country) {
    this.setState({ country })
  }

  onType (val) {
    this.setState({ })
  }

  render () {
    const { country } = this.state

    return (
      <div>
        <QuickAccess
          placeholder='Please, select your country'
          source={this.source}
          selected={this.selected}
      >
          <button className='button-primary'>Select a country</button>
        </QuickAccess>

        { country && <p>{`You selected: ${country.text}` }</p> }
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

function convertItem ({ name, flag }) {
  return {
    text: name,
    imageUrl: flag,
    key: name
  }
}
