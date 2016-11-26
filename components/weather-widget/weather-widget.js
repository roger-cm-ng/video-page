import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import coreStyles from '../../styles/core.scss';
import css from './weather-widget.scss';
import weatherWidgetActions from './weather-widget-actions.js';

@styleable(css)
class WeatherWidget extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    weatherWidgetActions: React.PropTypes.func,
    weatherWidgetReducer: React.PropTypes.object
	};

  componentWillMount() {
  }

  render() {
    return (
      <div className={`hwrld ${this.props.css.hwrld}`} >
        <h1>Weather Widget</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    weatherWidgetReducer: state.weatherWidgetReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    weatherWidgetActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);
