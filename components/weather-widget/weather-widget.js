import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/core.scss';
import css from './weather-widget.scss';
import { getPosition } from '../helpers/utils';
import { WEATHER_DATA_ACQUIRED, activateNoData, fetchGet } from './weather-widget-actions';
import WeatherWidgetStateless from './weather-widget-stateless/weather-widget-stateless';
import Loading from './loading/loading';
import NoData from './no-data/no-data';

@styleable(css)
class WeatherWidget extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    weatherWidgetReducer: React.PropTypes.object,
    fetchGet: React.PropTypes.func,
    activateNoData: React.PropTypes.func,
    options: React.PropTypes.object,
    noDataReducer: React.PropTypes.bool
	};

  componentWillMount() {
    getPosition({
      success: this.geoSuccess,
      fail: this.loadFallBackOption
    });
  }

  geoSuccess = (position) => {
    const { options } = this.props;
    this.props.fetchGet({
      dataUrl: `${options.weatherUrl}?appid=${options.weatherApiKey}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${options.units}`,
      dataAcquiredType: WEATHER_DATA_ACQUIRED,
      failCallBack: this.loadFallBackOption
    });
  }

  loadFallBackOption = () => {
    const { options } = this.props;
    this.props.fetchGet({
      dataUrl: `${options.weatherUrl}?appid=${options.weatherApiKey}&q=${options.fallBackLocation}&units=${options.units}`,
      dataAcquiredType: WEATHER_DATA_ACQUIRED,
      failCallBack: this.noData
    });
  }

  noData = () => {
    this.props.activateNoData();
  }

  render() {
    const { weatherWidgetReducer, noDataReducer, options } = this.props;
    let elm;

    if (noDataReducer) {
      elm = (
        <NoData />
      );
    } else if (!weatherWidgetReducer) {
      elm = (
        <Loading />
      );
    } else {
      elm = (
        <WeatherWidgetStateless
          data={weatherWidgetReducer}
          wind={options.wind}
        />
      );
    }

    return elm;
  }
}

function mapStateToProps(state) {
	return {
    weatherWidgetReducer: state.weatherWidgetReducer,
    noDataReducer: state.noDataReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    fetchGet,
    activateNoData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);
