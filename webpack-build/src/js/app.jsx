import React from 'react';
import Button from './components/button';
import '../less/app.less';

export default class App extends React.Component {
  render() {
    return (
      <div className="reactWrapper">
        <h5 className="title">fun with css</h5>
        <h1 className="headline">webpack build</h1>
        <Button>boczek</Button>
      </div>
    )
  }
}