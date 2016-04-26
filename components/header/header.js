import React from 'react';
let css = {};

if (process.env.BROWSER === 1) {
	css = require('./header.scss');
}

const Header = () => (
  <div className={css.header} >
		<a href="https://www.qantasassure.com/" alt="Qantas Assure" className={css.link}>
			<img className={css.img} src="img/bmp/qantas-assure-logo.png" />
		</a>
  </div>
);

export default Header;
