import React from 'react';
import DropDown from '../drop-down/drop-down';
import CollectionView from '../collection-view/collection-view';
let css = {};

if (process.env.BROWSER === 1) {
	css = require('./filter-bar.scss');
}

const FilterBar = () => (
  <div className={css['filter-bar']} >
		<div className={css.inner}>
			<span className={css.label}>Genre</span>
			<DropDown />
			<CollectionView />
		</div>
  </div>
);

export default FilterBar;
