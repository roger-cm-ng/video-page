/* global window */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, browserHistory as history } from 'react-router-dom';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import '../../styles/core.scss';
import css from './entry.scss';
import { action } from './entry-actions';
import Login from '../login/login';
import Global from '../../components/global-settings/global-settings';

const appConfig = window.pppAppConfig;
const BASE_NAME = appConfig ? appConfig.BaseName : '';

@styleable(css)
class Entry extends Component {
    static propTypes = {
        action: PropTypes.func,
        entryReducer: PropTypes.object
    };

    componentWillUpdate() {
    }

    render() {
        return (
            <div>
                <Router history={history} basename={BASE_NAME}>
                    <div>
                        <Route exact path="/" component={Global} />
                        <Route exact path="/login" component={Login} />
                        <Route path="/global-settings" component={Global} />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        entryReducer: state.entryReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        action
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
