import React, { Component } from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './secondary-btn-in.scss';

@styleable(css)
export default class SecondaryBtnIn extends Component {
  static propTypes = {
    content: React.PropTypes.string,
    callBack: React.PropTypes.func,
    href: React.PropTypes.string,
    css: React.PropTypes.object,
    payload: React.PropTypes.object
  };

  constructor() {
    super();
    this.callBack = this.callBack.bind(this);
  }

  callBack() {
    this.props.callBack(this.props.payload);
  }

  render() {
    let elm;
    if (this.props.href) {
      elm = (
        <a className={`secondary-btn ${this.props.css.inner}`} href={this.props.href}>
          {this.props.content}
        </a>
      );
    } else if (this.props.callBack) {
      elm = (
        <span className={`secondary-btn ${this.props.css.inner}`} onClick={() => this.callBack()}>
          {this.props.content}
        </span>
      );
    } else {
      elm = (
        <span className={`secondary-btn ${this.props.css.inner}`}>
          {this.props.content}
        </span>
      );
    }
    return (
      <div className={`hwrld ${css.hwrld}`}>
        {elm}
      </div>
    );
  }
}
