import React, { Component } from 'react';
import MoviesList from './MoviesList';
import ListMoviesWillWatch from './ListMoviesWillWatch';
import { API_URL, API_KEY_3 } from '../api';
import Filters from './Filters';
import Pagination from './Pagination';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			arrMoviesWatch: [],
			sortBy: 'popularity.desc',
			totalPages: null,
			currentPage: 1,
		};
	}

	componentDidMount() {
		this.getMovies();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.sortBy !== this.state.sortBy ||
			prevState.currentPage !== this.state.currentPage
		) {
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
		const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sortBy}&language=en-US&page=${this.state.currentPage}`;
		fetch(link)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					totalPages: data.total_pages,
					movies: data.results,
				});
			});
	}

	changeSortingMethod = (selector) => {
		this.setState({
			sortBy: selector,
		});
	};

	changeCurrentPage = (method) => {
		if (method === 'next') {
			this.setState({
				currentPage: this.state.currentPage + 1
			});

		} else if (method === 'previous') {
			this.setState({
				currentPage: this.state.currentPage - 1
			});
		}
	}

	render() {
		const { movies, arrMoviesWatch, currentPage, totalPages } = this.state;
		return (
			<div className='container'>
				<div className='row mt-4'>
					<div className='col-4 filter'>
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
						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							changeCurrentPage={this.changeCurrentPage}
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