import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../../styles/core.scss';
import css from './edit.scss';
import { changeEditFormData, activateAllErrorMsgs, resetEditFormData } from './edit-actions';
import { Textfield } from '../../form';
import { ErrorGeneric } from '../../error';
import FormCta from '../form-cta/form-cta';
import { loadModalContent, closeModal } from '../../details-modal/details-modal-actions';
import { LoadingModal } from '../../loading';
import { NEW_WIDGET_INSERTED } from '../list/list-actions';
import { fetchPost } from '../../helpers/common-actions';

@styleable(css)
class Edit extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    editFormReducer: React.PropTypes.object,
    changeEditFormData: React.PropTypes.func,
    resetEditFormData: React.PropTypes.func,
    activateAllErrorMsgs: React.PropTypes.func,
    loadModalContent: React.PropTypes.func,
    closeModal: React.PropTypes.func,
    fetchPost: React.PropTypes.func
	};

  componentWillMount() {}

  loading() {
    this.props.loadModalContent({
      overlayClicked: false,
      headerFooter: 'hide',
      component: (<LoadingModal>
        Please do not close this window or click the back button on your browser.
      </LoadingModal>),
      vis: true
    });
  }

  formOutcome = (data) => {
    this.props.loadModalContent({
      overlayClicked: false,
      headerFooter: 'hide',
      component: (<LoadingModal>
        Submitting weather widget...
      </LoadingModal>),
      vis: true
    });
    this.props.fetchPost({
      dataUrl: '/api/insert',
      data,
      dataAcquiredType: NEW_WIDGET_INSERTED,
      successCallBack: this.widgetInserted
    });
  }

  widgetInserted = () => {
    this.props.closeModal();
    this.props.resetEditFormData();
  }

  unitToggle = (val) => {
    this.props.changeEditFormData('unit', val);
  }

  windToggle = () => {
    const { editFormReducer } = this.props;

    this.props.changeEditFormData('wind', editFormReducer.wind.content !== true);
  }

  render() {
    const { editFormReducer } = this.props;

    return (
      <div className={`hwrld ${css.hwrld}`} >
        <p>Fill in the form and get the weather widget code</p>

        <div className={css['form-chunk']}>
          <Textfield
            callBack={this.props.changeEditFormData}
            ticket={'title'}
            value={editFormReducer.title.content}
            label={'Title'}
          />
          <ErrorGeneric
            validation={editFormReducer.title}
          />
        </div>

        <div className={css['form-chunk']}>
          <Textfield
            callBack={this.props.changeEditFormData}
            ticket={'fallBackLocation'}
            value={editFormReducer.fallBackLocation.content}
            label={'Fall back location'}
          />
          <ErrorGeneric
            validation={editFormReducer.fallBackLocation}
          />
        </div>

        <div className={css['form-chunk']}>
          <ul className={css.unit}>
            <li
              className={editFormReducer.unit.content === 'metric' ? css['unit-active'] : ''}
              onClick={() => this.unitToggle('metric')}
            >
              <i className={css['unit-round']}></i>
              <span className={css['unit-txt']}>metric</span>
            </li>
            <li
              className={editFormReducer.unit.content === 'imperial' ? css['unit-active'] : ''}
              onClick={() => this.unitToggle('imperial')}
            >
              <i className={css['unit-round']}></i>
              <span className={css['unit-txt']}>imperial</span>
            </li>

          </ul>
        </div>

        <div className={css['form-chunk']}>
          <div
            className={`${css.wind} ${editFormReducer.wind.content ? css['wind-active'] : ''}`}
            onClick={() => this.windToggle()}
          >
            <i className={css['wind-square']}></i>
            <span className={css['wind-txt']}>wind</span>
          </div>
        </div>

        <FormCta
          text={'SUBMIT'}
          formData={editFormReducer}
          activateAllErrorMsgs={this.props.activateAllErrorMsgs}
          formOutcome={this.formOutcome}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    editFormReducer: state.editFormReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    changeEditFormData,
    activateAllErrorMsgs,
    loadModalContent,
    fetchPost,
    closeModal,
    resetEditFormData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
