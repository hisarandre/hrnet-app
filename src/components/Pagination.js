import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Pagination = ({ pageIndex, pageOptions, canPreviousPage, canNextPage, nextPage, previousPage }) => {
  return (
    <section className="pagination">
      <span>
        showing page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </span>

      <span>
        <button type="button" aria-label="previous" onClick={() => previousPage()} disabled={!canPreviousPage}>
          <IoIosArrowBack />
        </button>{" "}
        <button type="button" aria-label="next" onClick={() => nextPage()} disabled={!canNextPage}>
          <IoIosArrowForward />
        </button>
      </span>
    </section>
  );
};

export default Pagination;
