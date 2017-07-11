import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../reload-reducer';
import Reload from '../reload';

/*const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(Reducers);

function setup() {
  return mount(<Provider store={store}>
    <Reload />
  </Provider>);
}*/

/*
describe('<Reload>', () => {
    setup();
  it('should have props for css and action ', () => {
      const wrapper = shallow(<Reload/>);
      expect(wrapper.props().css).to.be.defined;
      expect(wrapper.props().action).to.be.defined;
  });
});*/


describe('The Thing We Are Testing', () => {
    describe('A Context in Which We Are Testing the Thing', () => {
        describe('Testing Reload', () => {
            let componentUnderTest;
            let wrapper;

            before('Things We Do Before We Do Any Tests in this Context', () => {
                console.log('MyComponent class:', Reload);

                componentUnderTest = new Reload({
                    aaa: 'aaa',
                    bbb: 'bbb'
                });

                wrapper = shallow(
                    <Reload aaa="aaa" bbb="bbb"/>
                );

                console.log('wrapper:', wrapper);

                // now we can reference componentUnderTest properties:
                //            .props, (which we passed in above)
                //            .context,
                //            .refs,
                //            .updater
                //
                // updater has properties: {
                //              isMounted: [Function: isMounted],
                //              enqueueCallback: [Function: enqueueCallback],
                //              enqueueForceUpdate: [Function: enqueueForceUpdate],
                //              enqueueReplaceState: [Function: enqueueReplaceState],
                //              enqueueSetState: [Function: enqueueSetState] } }

                console.log('componentUnderTest', componentUnderTest);
            });

            after('Things We Do After We Complete All Tests in this Context', () => {
            });

            beforeEach('Things We Do Before Each Test Case in this Context', () => {
            });

            afterEach('Things We Do After Each Test Case in this Context', () => {
            });

            it('wrapper has two properties', () => {
                console.log('componentUnderTest', componentUnderTest);
                console.log('componentUnderTest.props', componentUnderTest.props);
                console.log('componentUnderTest.state', componentUnderTest.state);
                expect(1 + 1).toEqual(2);
            });
        });

        describe.skip('some generic test cases', () => {
            it('is a pending test, because it has no callback function');

            it.skip('is a skipped test (marked as pending), because of the .skip method', () => {
                console.log("if we weren't skipping this test, we'd see this in the log.");
            });

            // it.only('if we uncomment this, only this and other "it.only" tests will be run', () => {
            // });

            // Assertions from ExpectJS:
            //  toExist(messageIfFail)
            //  toNotExist(messageIfFail)
            //  toBe(value, messageIfFail)
            //  toNotBe(value, messageIfFail)
            //  toEqual(value, messageIfFail)
            //  toNotEqual(value, messageIfFail)
            //  toThrow(value, messageIfFail)
            //  toNotThrow(value, messageIfFail)
            //  toBeA(value, messageIfFail)
            //  toNotBeA(value, messageIfFail)
            //  toMatch(pattern, messageIfFail)
            //  toNotMatch(pattern, messageIfFail)
            //  toBeLessThan(value, messageIfFail)
            //  toBeLessThanOrEqualTo(value, messageIfFail)
            //  toBeGreaterThan(value, messageIfFail)
            //  toBeGreaterThanOrEqualTo(value, messageIfFail)
            //  toInclude(value, compareValues, messageIfFail)
            //  toExclude(value, compareValues, messageIfFail)
            //  toIncludeKeys(keys, comparator, messageIfFail)
            //  toIncludeKey(key)
            //  toExcludeKey(key)
            //  toHaveBeenCalled(messageIfFail)
            //  toHaveBeenCalledWith(args)
            //  toNotHaveBeenCalled(messageIfFail)

            it('illustrates a simple test case', () => {
                expect(1 + 1 === 2).toBe(true);
                expect(1 + 1 === 3).toNotBe(true);
            });

            it('illustrates another simple test case', () => {
                expect(1 + 1).toEqual(2);
            });
        });
    });

    // describe.only('if we uncomment this, only tests in this context will be executed, except "it.skip" tests', () => {
    //   it('gets executed', () => {});
    //   it.skip('does not get executed', () => {});
    // });

    // describe.skip('skip tests inside this context', () => {
    //   it('does not get executed, because it is in a "describe.skip" context"' , () => {});
    //   it.only('WARNING: an "it.only" test inside a "describe.skip" context will suppress all other tests" test', () => {});
    // });
});