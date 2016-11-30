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
import CopyAndPaste from '../copy-and-paste/copy-and-paste';
import moment from 'moment';

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
      dataUrl: '/api/get-all',
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
      <ul className={`hwrld ${this.props.css.hwrld}`} >
        {
          listReducer.reverse().map((val, ind) => (
            <li key={ind}>
              <div className={css.left}>
                <div><span className={css.label}>title</span> <span className={css.content}>{val.title}</span></div>
                <div><span className={css.label}>fall back location</span> <span className={css.content}>{val.fallBackLocation}</span></div>
                <div><span className={css.label}>unit</span> <span className={css.content}>{val.unit}</span></div>
                <div><span className={css.label}>wind</span> <span className={css.content}>{val.wind ? 'yes' : 'no'}</span></div>
                <div><span className={css.label}>date created</span> <span className={css.content}>{moment(val.created).format('DD-MM-YYYY')}</span></div>
              </div>

              <div className={css.right}>
                <CopyAndPaste
                  data={val}
                />
              </div>

            </li>
          ))
        }
      </ul>
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
