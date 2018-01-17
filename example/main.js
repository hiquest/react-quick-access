const { QuickAccess } = window.ReactQuickAccess

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <QuickAccess>
        <button className='button-primary'>Find a Book</button>
      </QuickAccess>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
