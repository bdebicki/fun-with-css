import React from 'react';
import Button from './components/button';

import '../less/app.less';
import layoutBuilders from '../less/layout/layoutBuilders.less';

export default class App extends React.Component {
  render() {
    return (
      <div className={layoutBuilders.reactWrapper}>
        <h5 className={layoutBuilders.title}>fun with css</h5>
        <h1 className={layoutBuilders.headline}>css modules</h1>
        
        <div className={layoutBuilders.elementContainer}>
          <Button>boczek</Button>
          <p className={layoutBuilders.elementDescription}>default button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button weight="light">boczek</Button>
          <p className={layoutBuilders.elementDescription}>light-weight button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button style="neutral">boczek</Button>
          <p className={layoutBuilders.elementDescription}>neutral-style button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button style="success">boczek</Button>
          <p className={layoutBuilders.elementDescription}>success-style button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button style="danger">boczek</Button>
          <p className={layoutBuilders.elementDescription}>danger-style button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button weight="light" style="neutral">boczek</Button>
          <p className={layoutBuilders.elementDescription}>light-weight neutral-style button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button weight="light" style="success">boczek</Button>
          <p className={layoutBuilders.elementDescription}>light-weight success-style button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button weight="light" style="danger">boczek</Button>
          <p className={layoutBuilders.elementDescription}>light-weight danger-style button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button weight="light" size="large">boczek</Button>
          <p className={layoutBuilders.elementDescription}>default large-size button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button weight="light" size="small">boczek</Button>
          <p className={layoutBuilders.elementDescription}>default small-size button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button weight="light" size="large">boczek</Button>
          <p className={layoutBuilders.elementDescription}>light-weight large-size button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button weight="light" size="small">boczek</Button>
          <p className={layoutBuilders.elementDescription}>light-weight small-size button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button streched>boczek</Button>
          <p className={layoutBuilders.elementDescription}>default streched-size button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button size="large" streched>boczek</Button>
          <p className={layoutBuilders.elementDescription}>default large-size streched-size button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button size="small" streched>boczek</Button>
          <p className={layoutBuilders.elementDescription}>default small-size streched-size button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button weight="light" streched>boczek</Button>
          <p className={layoutBuilders.elementDescription}>light-weight streched-size button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button weight="light" size="large" streched>boczek</Button>
          <p className={layoutBuilders.elementDescription}>light-weight large-size streched-size button</p>
        </div>

        <div className={layoutBuilders.elementContainer}>
          <Button weight="light" size="small" streched>boczek</Button>
          <p className={layoutBuilders.elementDescription}>light-weight small-size streched-size button</p>
        </div>
      </div>
    )
  }
}