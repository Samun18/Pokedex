import { useNavigate } from "react-router-dom";

export const Pagination = ({ pokPerPage, currentPage,  setCurrentPage, totalPoks
}) => {

  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalPoks / pokPerPage) ; i++) {
    pageNums.push(i);
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1)
  }
  const onNextPage = () => {
    setCurrentPage(currentPage + 1)
  }
  const onSpecificPage = (n) => {
    setCurrentPage(n)
  }

  const refresh = () => {
    const navigate = useNavigate()
    navigate('/pokedex')
  }
  
  return (
    <nav
      className="pagination is-centered mt-6 mb-6"
      role="navigation"
      aria-label="pagination"
    >
      <a className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviusPage}>Previous</a>
      <a className={`pagination-next ${currentPage > pageNums.length ? 'is-disabled' : ''}`} onClick={onNextPage}>Next page</a>
      <ul className="pagination-list">
        {pageNums.map((noPage) => (
          <li key={noPage}>
            <a  className={`pagination-link ${noPage === currentPage ? 'is-current' : ''}` } onClick={() => onSpecificPage(noPage) && refresh}>
              {noPage}
            </a>
          </li>
        ))}
        
      </ul>
    </nav>
  );
};
