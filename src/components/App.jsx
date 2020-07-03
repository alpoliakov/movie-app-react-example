import React, { Component } from 'react';
import { moviesData }from '../moviesData';
import MoviesList from './MoviesList';
import ListMoviesWillWatch from './ListMoviesWillWatch';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: moviesData,
			arrMoviesWatch: [],
		};
	}

	addToWatchList = movie => {

		this.setState({
			arrMoviesWatch: [...this.state.arrMoviesWatch, movie],
		});
	}

	removeFromWatchList = movie => {
		this.setState({
			arrMoviesWatch: this.state.arrMoviesWatch.filter(item => {
				return item.id !== movie.id
			})
		});
	}

  render() {
    const { movies, arrMoviesWatch } = this.state;
		return (
			<div className='container'>
				<div className='row mt-4'>
					<div className='col-9'>
						<MoviesList
							movies={movies}
							addToWatchList={this.addToWatchList}
							removeFromWatchList={this.removeFromWatchList}
						/>
					</div>
					<div className='col-3'>
						<ListMoviesWillWatch arrMoviesWatch={arrMoviesWatch} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;