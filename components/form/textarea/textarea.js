import React, { Component } from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../styles/core.scss';
import css from './textarea.scss';

@styleable(css)
class Textarea extends Component {
  static propTypes = {
    callBack: React.PropTypes.func,
    ticket: React.PropTypes.string,
    value: React.PropTypes.string
  }

  componentWillMount() {}

  render() {
    return (
      <div className={`hwrld ${css.hwrld}`}>
        <div className={`textarea ${css.textarea}`}>
          <textarea
            value={this.props.value}
            onChange={(evt) => this.props.callBack(this.props.ticket, evt.target.value)}
          >
          </textarea>
        </div>
      </div>
    );
  }
}

export default Textarea;
