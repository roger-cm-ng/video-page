import React from 'react';
let css = {};

if (process.env.BROWSER === 1) {
	css = require('./list-item.scss');
}

const ListItem = ({ movie }) => (
  <li className={css['list-item']}>
    <div className={`${css.title} col-sm-8`}>{movie.title}</div>
    <div className={`${css.genres} col-sm-4`}>{movie.genres.map((genre) => (<span key={`${movie} ${genre}`}>{genre} </span>))}</div>
  </li>
);

ListItem.propTypes = {
	movie: React.PropTypes.object,
  key: React.PropTypes.number
};

export default ListItem;
