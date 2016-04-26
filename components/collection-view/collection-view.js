import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseView } from './collection-view-actions';
let css = {};

if (process.env.BROWSER === 1) {
	css = require('./collection-view.scss');
}

@styleable(css)
class CollectionView extends Component {
  static propTypes = {
		css: React.PropTypes.object,
		chooseView: React.PropTypes.func,
		collectionViewReducer: React.PropTypes.string
  }

	handleClick(view) {
		this.props.chooseView(view);
	}

  render() {
    return (
      <div className={`${this.props.css['collection-view']} ${this.props.css[this.props.collectionViewReducer]}`}>
				<div onClick={() => this.handleClick('list')} className={this.props.css['btn-list']}>
					<div className={this.props.css['list-row']}>
						<div className={this.props.css['list-left']}></div>
						<div className={this.props.css['list-right']}></div>
					</div>
					<div className={this.props.css['list-row']}>
						<div className={this.props.css['list-left']}></div>
						<div className={this.props.css['list-right']}></div>
					</div>
					<div className={this.props.css['list-row']}>
						<div className={this.props.css['list-left']}></div>
						<div className={this.props.css['list-right']}></div>
					</div>
				</div>

				<div onClick={() => this.handleClick('card')} className={this.props.css['btn-card']}>
					<div className={this.props.css['card-square']}></div>
					<div className={this.props.css['card-square']}></div>
					<div className={this.props.css['card-square']}></div>
					<div className={this.props.css['card-square']}></div>
				</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    collectionViewReducer: state.collectionViewReducer
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    chooseView
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionView);
