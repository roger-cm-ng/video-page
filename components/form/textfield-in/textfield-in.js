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
    keyPressCallBack: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.fieldChanged = false;
    this.state = {
      val: props.value
    };
  }

  render() {
    return (
    <div className={`hwrld ${css.hwrld}`}>
      <div className={`textfield ${css.textfield}`}>
        <input
          type="text"
          value={this.fieldChanged ? this.state.val : this.props.value}
          onChange={(evt) => {
            this.fieldChanged = true;
            return this.setState({ val: evt.target.value });
          }}
          onBlur={() => this.props.callBack(this.props.ticket, this.fieldChanged ? this.state.val : this.props.value)}
          onKeyPress={this.props.keyPressCallBack}
        />
      </div>
    </div>
    );
  }
}

export default TextfieldIn;
