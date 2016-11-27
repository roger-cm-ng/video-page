import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/core.scss';
import css from './editor.scss';
import editorActions from './editor-actions.js';
import DetailsModal from '../details-modal/details-modal';
import AsyncErrorHandler from '../async-error-handler/async-error-handler';
import List from './list/list';

@styleable(css)
class Editor extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    editorActions: React.PropTypes.func,
    editorReducer: React.PropTypes.object
	};

  componentWillMount() {}

  render() {
    return (
      <div className={`hwrld ${css.hwrld}`} >
        <DetailsModal />
        <AsyncErrorHandler />
        <h1>Editor</h1>
        <List />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    editorReducer: state.editorReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    editorActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
