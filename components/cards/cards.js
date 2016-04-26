import React from 'react';
import Card from '../card/card';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
let css = {};

if (process.env.BROWSER === 1) {
	css = require('./cards.scss');
}

const Cards = ({ movies }) => (
	<div className={css.cards}>
		<ul className={css.inner} >
			<ReactCSSTransitionGroup transitionName="qa-list" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
				{movies.map((movie, ind) => (
					<Card movie={movie} key={ind} />
				))}
			</ReactCSSTransitionGroup>
		</ul>
	</div>
);

Cards.propTypes = {
	movies: React.PropTypes.array
};

export default Cards;
