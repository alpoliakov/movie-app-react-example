import React, { Component } from 'react';
import MovieItem from './MovieItem';


class MoviesList extends Component {
  render() {
    const { movies, addToWatchList, removeFromWatchList } = this.props;
    return (
			<div className='row'>
				{movies.map((movie) => (
					<div key={movie.id} className='col-4 mb-4'>
						<MovieItem
							item={movie}
							addToWatchList={addToWatchList}
							removeFromWatchList={removeFromWatchList}
						/>
					</div>
				))}
			</div>
		);
  }
}

export default MoviesList;