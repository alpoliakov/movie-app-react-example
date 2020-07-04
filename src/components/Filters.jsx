import React, { Component } from 'react';

class Filters extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		value: 'popularity.desc',
	// 	};
	// }

  // handleChange = (event) => {
  //   this.setState({
  //     value: event.target.value,
  //   });
  //   console.log(this.state.value);

  //   setTimeout(() => {
  //     sortList(this.state.value);
  //   }, 100)
  // }

	render() {
    // const { value } = this.state;
    const { sortList } = this.props;
    const handleChange = (event) => {
      sortList(event.target.value);
    }
		return (
			<form className='mb-3'>
				<div className='form-group'>
					<label htmlFor='sort_by'>Sort by:</label>
					<select
						className='form-control'
						id='sort_by'
						// value={value}
						onChange={handleChange}
					>
						<option value='popularity.desc'>Popular descending</option>
						<option value='popularity.asc'>Popular ascending</option>
						<option value='vote_average.desc'>Rating descending</option>
						<option value='vote_average.asc'>Rating ascending</option>
					</select>
				</div>
			</form>
		);
	}
}

export default Filters;