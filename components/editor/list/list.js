import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../../styles/core.scss';
import css from './list.scss';
import { loadModalContent, closeModal } from '../../details-modal/details-modal-actions';
import { fetchGet } from '../../helpers/common-actions';
import { LoadingModal } from '../../loading';
import { WIDGETS_ACQUIRED } from './list-actions';

@styleable(css)
class List extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    loadModalContent: React.PropTypes.func,
    closeModal: React.PropTypes.func,
    fetchGet: React.PropTypes.func,
    listReducer: React.PropTypes.array
	};

  componentWillMount() {
    this.props.loadModalContent({
      overlayClicked: false,
      headerFooter: 'hide',
      component: (<LoadingModal>
        Loading weather widget record...
      </LoadingModal>),
      vis: true
    });
    this.props.fetchGet({
      dataUrl: '/api/widgets',
      dataAcquiredType: WIDGETS_ACQUIRED,
      successCallBack: this.widgetsLoaded
    });
  }

  widgetsLoaded = () => {
    this.props.closeModal();
  }

  render() {
    const { listReducer } = this.props;
    return (
      <div className={`hwrld ${this.props.css.hwrld}`} >
        {
          listReducer.map((val, ind) => (
            <div key={ind}>
              <div>Title: {val.title}</div>
              <div>Unit: {val.unit}</div>
              <div>Wind: {val.wind ? 'yes' : 'no'}</div>
              <hr />
            </div>
          ))
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    listReducer: state.listReducer
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    loadModalContent,
    closeModal,
    fetchGet
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
