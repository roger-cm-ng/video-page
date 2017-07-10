import expect from 'expect'
import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../reload-reducer';
import Reload from '../reload';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(Reducers);

function setup() {
  return mount(<Provider store={store}>
    <Reload />
  </Provider>);
}

describe('<Reload>', () => {
  it('should have ', () => {

  });
});