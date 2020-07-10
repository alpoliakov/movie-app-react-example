import React from 'react';

const Pagination = (props) => {
  const { currentPage, totalPages, changeCurrentPage } = props;

  const prevPage = () => {
    if (currentPage === 1) {
      return;
    }
    changeCurrentPage('previous');
  };

  const nextPage = () => {
    if (currentPage === 500) {
			return;
		}
      changeCurrentPage('next');
  }

  return (
		<nav aria-label='Статьи по Bootstrap 4'>
			<ul className='pagination justify-content-center'>
				<li
					className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
					role='button'
					onClick={prevPage}
				>
					<span className='page-link'>Previous</span>
				</li>
				<li className='page-item disabled'>
					<span className='page-link'>Current page: {currentPage}</span>
				</li>
				<li className='page-item disabled'>
					<span className='page-link'>Total pages: {totalPages}</span>
				</li>
				<li
					className={`page-item ${currentPage === 500 ? 'disabled' : ''}`}
					role='button'
					onClick={nextPage}
				>
					<span className='page-link'>Next</span>
				</li>
			</ul>
		</nav>
	);
}

export default Pagination;