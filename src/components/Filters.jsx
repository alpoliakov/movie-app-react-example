import React, { Component } from 'react';

class Filters extends Component {
	render() {
    const { changeSortingMethod } = this.props;
    const handleChange = (event) => {
			changeSortingMethod(event.target.value);
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
						<option value='revenue.desc'>Rating descending</option>
						<option value='revenue.asc'>Rating ascending</option>
					</select>
				</div>
			</form>
		);
	}
}

export default Filters;