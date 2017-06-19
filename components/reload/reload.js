import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import '../../styles/core.scss';
import css from './reload.scss';
import { action } from './reload-actions';

@styleable(css)
class Reload extends Component {
  static propTypes= {
    action: PropTypes.func,
    reloadReducer: PropTypes.object
  };

  componentWillUpdate() {}

  render() {
    return (
      <div className={css.component} >
        <h1>Reload Prod</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reloadReducer: state.reloadReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    action
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Reload);
