import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import '../../styles/core.scss';
import css from './delete-me.scss';
import { action } from './delete-me-actions';

@styleable(css)
class DeleteMe extends Component {

  static propTypes= {
    options: PropTypes.object
  };

  componentWillUpdate() {}

  render() {
    return (
      <div className={css.component} >
        <h1>Please Delete Me, Let Me Go.</h1>
        <p>{ this.props.options.hint }</p>
      </div>
    );
  }
}

function mapStateToProps({ deleteMe }) {
  return {
    deleteMe
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    action
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMe);
