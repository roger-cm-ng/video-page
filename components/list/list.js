import React from 'react';
import ListItem from '../list-item/list-item';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
let css = {};

if (process.env.BROWSER === 1) {
	css = require('./list.scss');
}

const List = ({ movies }) => (
	<div className={css.list}>
		<div className={`${css.bar} hidden-xs`}>
			<div className={css.inner} >
				<div className={`${css.title} col-sm-8`}>Title</div>
				<div className={`${css.genres} col-sm-4`}>Genre</div>
			</div>
		</div>
		<ul className={css.inner} >
			<ReactCSSTransitionGroup transitionName="qa-list" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
				{movies.map((movie, ind) => (
					<ListItem movie={movie} key={ind} />
				))}
			</ReactCSSTransitionGroup>
		</ul>
	</div>
);

List.propTypes = {
	movies: React.PropTypes.array
};

export default List;
