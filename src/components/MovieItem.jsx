import React, { Component } from 'react';

class MovieItem extends Component {
	constructor() {
		super();
		this.state = {
			watchWill: false,
		};
	}

	changeViewingDesires = () => {
		const { addToWatchList, removeFromWatchList, item } = this.props;
		this.state.watchWill ? removeFromWatchList(item) : addToWatchList(item);

    this.setState({
      watchWill: !this.state.watchWill,
    })
  }

	render() {
		const { item } = this.props;
		const { watchWill } = this.state;
		return (
			<div className='card' style={{ width: '100%' }}>
				<img
					className='card-img-top'
					src={`https://image.tmdb.org/t/p/w500${
						item.backdrop_path || item.item.poster_path
					}`}
					alt={item.title}
				/>
				<div className='card-body'>
					<h6 className='card-title'>{item.title}</h6>
					<div className='d-flex justify-content-between align-items-center'>
						<p className='mb-0'>Rating: {item.vote_average}</p>
						<button
							type='button'
							onClick={this.changeViewingDesires}
							className={`btn ${watchWill ? 'btn-success' : 'btn-secondary'}`}
						>
							Will Watch
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieItem;