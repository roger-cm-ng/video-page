import React from 'react';
let css = {};

if (process.env.BROWSER === 1) {
	css = require('./card.scss');
}

const Card = ({ movie }) => (
  <li className={`${css.card} col-lg-3 col-md-4 col-sm-6 col-xs-12`}>
		<div className={css.inner}>
			<div className={css.title}>
				{movie.title}
			</div>

			<div className={css.genres}>
				<span className={css.label}>Genre: </span>
				{movie.genres.map((genre) => (<span key={`${movie} ${genre}`}>{genre} </span>))}
			</div>

			<div className={css.rated}>
				<span className={css.label}>Rated: </span>
				{movie.rated}
			</div>

			<div className={css.language}>
				<span className={css.label}>Language: </span>
				{movie.language.map((lang) => (<span key={`${movie} ${lang}`}>{lang} </span>))}
			</div>

			<div className={css.rating}>
				<span className={css.label}>Rating: </span>
				{movie.rating}
			</div>
		</div>

  </li>
);

Card.propTypes = {
	movie: React.PropTypes.object,
  key: React.PropTypes.number
};

export default Card;
