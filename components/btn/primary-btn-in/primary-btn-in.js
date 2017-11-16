import React, { Component } from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './primary-btn-in.scss';

@styleable(css)
export default class PrimaryBtnIn extends Component {
  static propTypes = {
    content: React.PropTypes.string,
    callBack: React.PropTypes.func,
    href: React.PropTypes.string,
    css: React.PropTypes.object,
    disable: React.PropTypes.bool,
    uniqueClass: React.PropTypes.string
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
    if (this.props.disable) {
      elm = (
        <span className={`primary-btn ${css.inner} ${css.disable} ${this.props.uniqueClass}`}>
          {this.props.content}
        </span>
      );
    } else if (this.props.href) {
      elm = (
        <a className={`primary-btn ${this.props.css.inner} ${this.props.uniqueClass}`} href={this.props.href}>
          {this.props.content}
        </a>
      );
    } else if (this.props.callBack) {
      elm = (
        <span className={`primary-btn ${this.props.css.inner} ${this.props.uniqueClass}`} onClick={() => this.callBack()}>
          {this.props.content}
        </span>
      );
    } else {
      elm = (
        <span className={`primary-btn ${this.props.css.inner} ${this.props.uniqueClass}`}>
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
