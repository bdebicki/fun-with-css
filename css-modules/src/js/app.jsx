import React from 'react';
import Button from './components/button';

import '../less/app.less';
import layoutBuilders from '../less/layout/layoutBuilders.less';

export default class App extends React.Component {
  render() {
    return (
      <div className={layoutBuilders.reactWrapper}>
        <h5>fun with css</h5>
        <h1>css modules</h1>
        <div className={layoutBuilders.elementContainer}>
          <Button>boczek</Button>
          <p className={layoutBuilders.elementDescription}>boczek</p>
        </div>
      </div>
    )
  }
}