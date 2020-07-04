import React, { Component } from 'react';
import MoviesList from './MoviesList';
import ListMoviesWillWatch from './ListMoviesWillWatch';
import { API_URL, API_KEY_3 } from '../api';
import Filters from './Filters';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies:[],
			arrMoviesWatch: [],
		};
	}

	sortList = selector => {
		let items = [...this.state.movies];
		if (selector === 'popularity.desc') {
			items = items.sort((a, b) => b.popularity - a.popularity);
		}
		if (selector === 'popularity.asc') {
			items = items.sort((a, b) => a.popularity - b.popularity);
		}
		if (selector === 'vote_average.desc') {
			items.sort((a, b) => b.vote_average - a.vote_average);
		}
		if (selector === 'vote_average.asc') {
			items.sort((a, b) => a.vote_average - b.vote_average);
		}
			this.setState({
				movies: items,
			});
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

	componentDidMount() {
		const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=en-EN`;
		fetch(link)
			.then(response => response.json())
			.then(data => {
				this.setState({
					movies: data.results
				})
		})
	}

  render() {
    const { movies, arrMoviesWatch } = this.state;
		return (
			<div className='container'>
				<div className='row mt-4'>
					<div className='col-4'>
						<div className='card' style={{ width: '100%' }}>
							<div className='card-body'>
								<h3>Filters:</h3>
								<Filters sortList={this.sortList} />
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