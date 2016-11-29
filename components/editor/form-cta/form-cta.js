import React, { Component } from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './form-cta.scss';
import FormDataRecursive from '../../helpers/form-data-recursive';
import { PrimaryBtn } from '../../btn';

@styleable(css)
class FormCta extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    formData: React.PropTypes.object,
    text: React.PropTypes.string,
    activateAllErrorMsgs: React.PropTypes.func,
    manifestReducer: React.PropTypes.object,
    formOutcome: React.PropTypes.func
	};

  constructor() {
    super();
    this.cta = this.cta.bind(this);
    this.clientSideBadDataError = this.clientSideBadDataError.bind(this);
    this.msg = '';
  }

  cta() {
    const { formData } = this.props;

    if (!FormDataRecursive.check(formData)) {
      this.props.activateAllErrorMsgs();
      this.clientSideBadDataError(true);
    } else {
      this.clientSideBadDataError(false);
      const finalData = FormDataRecursive.recurseClean(formData);
      this.props.formOutcome(finalData);
    }
  }

  clientSideBadDataError(bool) {
    if (bool) {
      this.msg = 'Please check your form for errors';
    } else {
      this.msg = '';
    }
    this.forceUpdate();
  }

  render() {
    const { text } = this.props;
    return (
      <div
        className={`hwrld ${css.hwrld}`}
      >
        <PrimaryBtn
          callBack={this.cta}
          content={text}
        />
        <div className={css['bad-data']}>
          {this.msg}
        </div>
      </div>
    );
  }
}

export default FormCta;
