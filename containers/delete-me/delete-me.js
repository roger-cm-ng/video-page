import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import '../../styles/core.scss';
import css from './delete-me.scss';
import { action } from './delete-me-actions';

const pngSrc = require('./images/rotating_flags.png');
const jpegSrc = require('./images/cross.jpeg');
const jpgSrc = require('./images/ausHeader.jpg');
const svgSrc = require('./images/math-logo.svg');

@styleable(css)
class DeleteMe extends Component {

    static propTypes = {
        options: PropTypes.object
    };

    componentWillUpdate() {
    }

    render() {
        const pngStyle = `${css.img_container} ${css.pngCSS}`;
        const jpegStyle = `${css.img_container} ${css.jpegCSS}`;
        const jpgStyle = `${css.img_container} ${css.jpgCSS}`;
        const svgStyle = `${css.img_container} ${css.svgCSS}`;

        return (
            <div className={css.component}>
                <h1>Please Delete Me, Let Me Go.</h1>
                <p>{this.props.options.hint}</p>
                <div>Image Tag Tester</div>
                <img alt="" src={pngSrc} />
                <img alt="" src={jpegSrc} />
                <img alt="" src={jpgSrc} />
                <img alt="" src={svgSrc} />
                <div className={css.flex_row}>Image CSS Tester
                    <div className={pngStyle} />
                    <div className={jpegStyle} />
                    <div className={jpgStyle} />
                    <div className={svgStyle} />
                </div>

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
