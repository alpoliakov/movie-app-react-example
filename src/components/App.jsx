import React, { Component } from 'react';
import MoviesList from './MoviesList';
import ListMoviesWillWatch from './ListMoviesWillWatch';
import { API_URL, API_KEY_3 } from '../api';
import Filters from './Filters';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			arrMoviesWatch: [],
			sort_by: 'popularity.desc',
		};
	}

	componentDidMount() {
		this.getMovies();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.sort_by !== this.state.sort_by) {
			this.getMovies();
		}
	}

	addToWatchList = (movie) => {
		this.setState({
			arrMoviesWatch: [...this.state.arrMoviesWatch, movie],
		});
	};

	removeFromWatchList = (movie) => {
		this.setState({
			arrMoviesWatch: this.state.arrMoviesWatch.filter((item) => {
				return item.id !== movie.id;
			}),
		});
	};

	getMovies = () => {
		const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`;
		console.log(link);
		fetch(link)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					movies: data.results,
				});
			});
	}

	changeSortingMethod = (selector) => {
		this.setState({
			sort_by: selector,
		});
	};

	render() {
		const { movies, arrMoviesWatch } = this.state;
		return (
			<div className='container'>
				<div className='row mt-4'>
					<div className='col-4'>
						<div className='card' style={{ width: '100%' }}>
							<div className='card-body'>
								<h3>Filters:</h3>
								<Filters changeSortingMethod={this.changeSortingMethod} />
							</div>
						</div>
					</div>
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