import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
  render() {
    return (
      <h1>Styled components</h1>
    )
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);