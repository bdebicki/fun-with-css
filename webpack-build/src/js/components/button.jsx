import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../../less/components/button.less';

export default class Button extends React.Component {
  render() {
    const classes = classNames(
      'btn',
      this.props.className
    );

    return (
      <button className={classes}>{this.props.children}</button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired
};

Button.defaultProps = {
  className: null
};