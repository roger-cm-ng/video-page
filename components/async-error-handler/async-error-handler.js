import React, { Component } from 'react';
import styleable from 'react-styleable';
import '../../styles/core.scss';
import css from './async-error-handler.scss';
import { ErrorServer } from '../error';
import _ from 'lodash';
import { loadModalContent } from '../details-modal/details-modal-actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

@styleable(css)
class AsyncErrorHandler extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    asyncErrorHandlerReducer: React.PropTypes.object,
    loadModalContent: React.PropTypes.func
	};

  componentDidUpdate() {
    if (!_.isEmpty(this.props.asyncErrorHandlerReducer)) {
      this.props.loadModalContent({
        overlayClicked: true,
        headerFooter: 'show',
        component: (<ErrorServer>
          {
            this.props.asyncErrorHandlerReducer.errors ? this.props.asyncErrorHandlerReducer.errors.map((err) => (
              <div>{err.message}</div>
            )) : <div>An error has occured</div>
          }
        </ErrorServer>),
        vis: true
      });
    } else if (_.isEmpty(this.props.asyncErrorHandlerReducer) && this.props.asyncErrorHandlerReducer !== null) {
      this.props.loadModalContent({
        overlayClicked: true,
        headerFooter: 'show',
        component: (<ErrorServer>
          Network error!
        </ErrorServer>),
        vis: true
      });
    }
  }

  render() {
    return (
      <div className={`hwrld ${this.props.css.hwrld}`} >

      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    asyncErrorHandlerReducer: state.asyncErrorHandlerReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    loadModalContent
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncErrorHandler);
