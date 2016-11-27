import React, { Component } from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../styles/core.scss';
import css from './details-modal.scss';
import SkyLight from '../react-skylight';
import { SecondaryBtn } from '../btn';
import { dialog, closeBtn, overlay } from '../helpers/modal-style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activateReducerHide } from './details-modal-actions';

@styleable(css)
class DetailsModal extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    text: React.PropTypes.string,
    children: React.PropTypes.array,
    details: React.PropTypes.object,
    externalCta: React.PropTypes.bool,
    flush: React.PropTypes.object,
    modalReducer: React.PropTypes.object,
    activateReducerHide: React.PropTypes.func
	};

  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.refs.dialog.show();
  }

  closeModal() {
    this.refs.dialog.hide();
    this.props.activateReducerHide();
  }

  componentDidUpdate() {
    if (this.props.modalReducer.vis) {
      this.showModal();
    }
    if (!this.props.modalReducer.vis) {
      this.refs.dialog.hide();
    }
  }

  render() {
    let dialogStyles = dialog();
    if (this.props.modalReducer.height) {
      dialogStyles.height = this.props.modalReducer.height;
    }

    return (
      <div className={`hwrld ${this.props.css.hwrld}`} >
        <SkyLight
          hideOnOverlayClicked={this.props.modalReducer.overlayClicked}
          ref="dialog"
          dialogStyles={dialogStyles}
          closeButtonStyle={closeBtn()}
          overlayStyles={overlay()}
        >
          <div
            onClick={() => this.closeModal()}
            className={`${css['go-back-link']} ${this.props.modalReducer.headerFooter}`}
          >
            <i className={css['go-back-icon']} />Go back
          </div>
          {this.props.modalReducer.component}

          <div className={`${css['button-wrapper']} ${this.props.modalReducer.headerFooter}`}>
            <SecondaryBtn callBack={this.closeModal} content={'OK, GOT IT'} />
          </div>
        </SkyLight>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		modalReducer: state.modalReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    activateReducerHide
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsModal);
