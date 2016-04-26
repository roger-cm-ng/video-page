import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styleable from 'react-styleable';
import { getMovies } from './app-actions';
import movies from './movies.json';
import List from '../list/list';
import Header from '../header/header';
import FilterBar from '../filter-bar/filter-bar';
import Cards from '../cards/cards';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
let css = {};
let appOpacity = 0;

if (process.env.BROWSER === 1) {
	require('../../styles/core.scss');
	css = require('./app.scss');
	appOpacity = 1;
}

@styleable(css)
class App extends Component {
	static propTypes = {
		getMovies: React.PropTypes.func,
		genreSelectedReducer: React.PropTypes.array,
		css: React.PropTypes.object,
		collectionViewReducer: React.PropTypes.string
	}

	componentWillMount() {
		this.props.getMovies(movies);
	}

	changeCollectionView() {
		let collectionView;
		if (this.props.collectionViewReducer === 'list') {
			collectionView =	<List movies={this.props.genreSelectedReducer} />;
		} else {
			collectionView =	<Cards movies={this.props.genreSelectedReducer} />;
		}
		return collectionView;
	}

	render() {
		return (
			<div style={{ opacity: appOpacity }}>
				<Header />
				<FilterBar />
				<ReactCSSTransitionGroup transitionName="qa-list" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{this.changeCollectionView()}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		genreSelectedReducer: state.genreSelectedReducer,
		collectionViewReducer: state.collectionViewReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getMovies
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
