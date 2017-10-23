// Adapted from https://github.com/StephenGrider/AdvancedReduxCode/blob/master/testing/test/test_helper.js
// (I don't fully understand this yet, but I'm working on it)
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chaiJquery from 'chai-jquery';
import CombinedReducers from '../containers/app/combined-reducers';

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(CombinedReducers, state)}>
            <ComponentClass {...props} />
        </Provider>
    );

    /* eslint react/no-find-dom-node: 0 */
    return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

// Build helper for simulating events
/* eslint func-names: 0 */
$.fn.simulate = function (eventName, value) {
    if (value) {
        this.val(value);
    }

    TestUtils.Simulate[eventName](this[0]);
};

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
