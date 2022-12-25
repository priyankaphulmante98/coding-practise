function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ totalPages, handlePageChange, currentPage }) {
  let pages = createArrayOfSize(totalPages).map((a, i) => {
    // console.log(i)
    return (<button
      disabled={currentPage === i + 1}
      data-testid="page-btn"
      onClick={() => handlePageChange(i + 1)}
    >{i + 1}
    </button>);
  });
  return <div>{pages}</div>;
}

export default Pagination;
