import React, { Component } from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './btn-teal.scss';

@styleable(css)
export default class BtnTeal extends Component {
  static propTypes = {
    disabled: React.PropTypes.bool,
    content: React.PropTypes.string,
    callBack: React.PropTypes.func,
    href: React.PropTypes.string,
    css: React.PropTypes.object
  };

  constructor() {
    super();
    this.callBack = this.callBack.bind(this);
  }

  callBack() {
    this.props.callBack();
  }

  render() {
    let elm;
    if (this.props.disabled) {
      elm = (
        <span className={`primary-btn ${this.props.css.disabled}`} >
          {this.props.content}
        </span>
      );
    } else if (this.props.href) {
      elm = (
        <a className={`primary-btn ${this.props.css.inner}`} href={this.props.href}>
          {this.props.content}
        </a>
      );
    } else if (this.props.callBack) {
      elm = (
        <span className={`primary-btn ${this.props.css.inner} `} onClick={() => this.callBack()}>
          {this.props.content}
        </span>
      );
    } else {
      elm = (
        <span className={`primary-btn ${this.props.css.inner}`}>
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
