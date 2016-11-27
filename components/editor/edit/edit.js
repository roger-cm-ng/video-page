import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import coreStyles from '../styles/core.scss';
import css from './edit.scss';
import editActions from './edit-actions.js';

@styleable(css)
class Edit extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    editActions: React.PropTypes.func,
    editReducer: React.PropTypes.object
	};

  render() {
    return (
      <div className={`hwrld ${this.props.css.hwrld}`} >

      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    editReducer: state.editReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    editActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);