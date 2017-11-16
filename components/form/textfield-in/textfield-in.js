import React, { Component } from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../styles/core.scss';
import css from './textfield-in.scss';

@styleable(css)
class TextfieldIn extends Component {
  static propTypes = {
    callBack: React.PropTypes.func,
    ticket: React.PropTypes.string,
    value: React.PropTypes.string,
    keyPressCallBack: React.PropTypes.func,
    label: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.fieldChanged = false;
    this.state = {
      val: props.value,
      focus: false
    };
  }

  render() {
    return (
    <div className={`hwrld ${css.hwrld} ${this.state.focus ? css.active : ''} ${this.props.value.length !== 0 ? css.filled : ''}`}>
      <div className={css.label}>{this.props.label}</div>
      <div className={css.box}></div>
      <input
        type="text"
        value={this.props.value}
        onChange={(evt) => this.props.callBack(this.props.ticket, evt.target.value)}
        onBlur={() => {
          this.setState({ focus: false });
        }}
        onFocus={() => {
          this.setState({ focus: true });
        }}
        onKeyPress={this.props.keyPressCallBack}

      />
    </div>
    );
  }
}

export default TextfieldIn;
