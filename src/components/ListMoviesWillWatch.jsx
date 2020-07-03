import React, { Component } from 'react';

class ListMoviesWillWatch extends Component {
  render() {
    const { arrMoviesWatch } = this.props;
    return (
			<div className='box--willwatch'>
				<h4>Will Watch: {arrMoviesWatch.length} movies</h4>
				<ul className='list-group'>
					{arrMoviesWatch.map((item) => (
						<li key={item.id} className='list-group-item'>
							<div className='d-flex justify-content-between'>
								<div>{item.title}</div>
								<div>{item.vote_average}</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		);
  }
}

export default ListMoviesWillWatch;