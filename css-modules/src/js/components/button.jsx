import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import btn from '../../less/components/button.less';

export default class Button extends React.Component {
  btnWeight() {
    if(this.props.weight === 'light') {
        return btn.lightWeight;
    }
    return '';
  }
  btnStyle() {
    if(this.props.style === 'neutral') {
        return btn.neutralStyle;
    }
    if(this.props.style === 'success') {
        return btn.successStyle;
    }
    if(this.props.style === 'danger') {
        return btn.dangerStyle;
    }
    return '';
  }
  btnSize() {
    if(this.props.size === 'large') {
        return btn.largeSize;
    }
    if(this.props.size === 'small') {
        return btn.smallSize;
    }
    return '';
  }
  btnStrech() {
    if(this.props.streched) {
        return btn.stretchedSize;
    }
    return false;
  }

  render() {
    const weight = this.btnWeight();
    const style = this.btnStyle();
    const size = this.btnSize();
    const strech = this.btnStrech();

    const classes = classNames(
      btn.btn,
      weight,
      style,
      size,
      strech
    );

    return (
      <button className={classes}>{this.props.children}</button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  btnWeight: PropTypes.string,
  btnStyle: PropTypes.string,
  btnSize: PropTypes.string,
  btnStreched: PropTypes.bool
};

Button.defaultProps = {
  className: null,
  btnWeight: null,
  btnStyle: null,
  btnSize: null,
  btnStreched: false
};