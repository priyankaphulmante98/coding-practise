import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}


function Pagination({totalPages,currentPage,handlePageChange}) {
  let arr=createArrayOfSize(totalPages)
  
  let pages = arr.map((a, i) => (
    <button
      key={i}
      onClick={() => {handlePageChange(i+1)}}
      disabled={currentPage == i + 1}
      data-testid="page-btn"
    >
      {i + 1}
    </button>));
  return <div>{pages}</div>;
}

export default Pagination;
