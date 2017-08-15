import React from 'react';
import Button from './components/button';
import '../less/app.less';

const BTNS_LIST = [
  {classes: '', description: 'default button'},
  {classes: 'light-weight', description: 'light-weight button'},
  {classes: 'neutral-style', description: 'neutral-style button'},
  {classes: 'success-style', description: 'success-style button'},
  {classes: 'danger-style', description: 'danger-style button'},
  {classes: 'light-weight neutral-style', description: 'light-weight neutral-style button'},
  {classes: 'light-weight success-style', description: 'light-weight success-style button'},
  {classes: 'light-weight danger-style', description: 'light-weight danger-style button'},
  {classes: 'large-size', description: 'default large-size button'},
  {classes: 'small-size', description: 'default small-size button'},
  {classes: 'light-weight large-size', description: 'light-weight large-size button'},
  {classes: 'light-weight small-size', description: 'light-weight small-size button'},
  {classes: 'stretched-size', description: 'default stretched-size button'},
  {classes: 'large-size stretched-size', description: 'default large-size stretched-size button'},
  {classes: 'small-size stretched-size', description: 'default small-size stretched-size button'},
  {classes: 'light-weight stretched-size', description: 'light-weight stretched-size button'},
  {classes: 'light-weight large-size stretched-size', description: 'light-weight large-size stretched-size button'},
  {classes: 'light-weight small-size stretched-size', description: 'light-weight small-size stretched-size button'}
];

export default class App extends React.Component {
  render() {
    return (
      <div className="reactWrapper">
        <h5 className="title">fun with css</h5>
        <h1 className="headline">webpack build</h1>
        {BTNS_LIST.map((item) => {
          return(
            <div className="elementContainer">
              <Button className={item.classes}>boczek</Button>
              <p className="elementDescription">{item.description}</p>
            </div>
          )
        })}
      </div>
    )
  }
}