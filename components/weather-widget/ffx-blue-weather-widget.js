import React from 'react';
import ReactDom from 'react-dom';
import { handleDefaults } from '../helpers/utils';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import WeatherWidgetCombinedReducers from './weather-widget-combined-reducers';
import WeatherWidget from './weather-widget';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default class FfxBlueWeatherWidget {
  constructor(element, dynamicOptions) {
    const defaults = {
      weatherApiKey: '0662751880d435bb226a86660788e48c',
      weatherUrl: '//api.openweathermap.org/data/2.5/weather',
      fallBackLocation: 'Sydney',
      unit: 'metric',
      wind: true
    };
		this.element = element;
		this.options = handleDefaults(defaults, dynamicOptions);
		this.renderElm();
  }

	renderElm() {
    const store = createStoreWithMiddleware(
      WeatherWidgetCombinedReducers,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
		ReactDom.render(
			<Provider store={store}>
				<WeatherWidget options={this.options} />
			</Provider>
			,
			document.querySelector(this.element)
    );
	}
}

window.FfxBlueWeatherWidget = FfxBlueWeatherWidget;
