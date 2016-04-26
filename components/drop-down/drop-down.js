import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dedupeGenres, selectGenre } from './drop-down-actions';
let css = {};

if (process.env.BROWSER === 1) {
	css = require('./drop-down.scss');
}

@styleable(css)
class DropDown extends Component {
  static propTypes = {
    dedupeGenres: React.PropTypes.func,
    moviesReducer: React.PropTypes.array,
    genresDedupedReducer: React.PropTypes.array,
    selectGenre: React.PropTypes.func,
		css: React.PropTypes.object
  }

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.all = 'All';
  }

  componentWillMount() {
    this.props.dedupeGenres(this.props.moviesReducer);
    this.props.selectGenre(this.all, this.all, this.props.moviesReducer);
  }

  handleChange(evt) {
    this.props.selectGenre(this.all, evt.target.value, this.props.moviesReducer);
  }

  render() {
    return (
      <div className={this.props.css['drop-down']}>
        <select onChange={this.handleChange}>
          {this.props.genresDedupedReducer.map((genre, ind) => (
            <option key={ind}>{genre}</option>
          ))}
        </select>
				<div className={this.props.css.dummy}>
					<i></i>
				</div>

      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    moviesReducer: state.moviesReducer,
    genresDedupedReducer: state.genresDedupedReducer
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    dedupeGenres,
    selectGenre
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
