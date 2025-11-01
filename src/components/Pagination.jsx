const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  resultsPerPage,
  onResultsPerPageChange,
  resultsPerPageOptions = [10, 20, 30],
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const delta = 2; // how many pages to show around current

    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);

    if (left > 2) {
      pages.push("...");
    }

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col gap-y-3 md:flex-row justify-between items-center py-4 px-4 ">
      {/* Left: Results Per Page */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">Results per page</span>
        <select
          value={resultsPerPage}
          onChange={(e) => onResultsPerPageChange(Number(e.target.value))}
          className="px-2 py-1 rounded-md border bg-light-gray border-secondary-background text-sm focus:outline-none focus:ring-2 focus:ring-light-background text-myBlack "
        >
          {resultsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Right: Pagination */}
      <div className="flex items-center space-x-1">
        {/* Prev */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-1.5 md:px-3 py-1 rounded-md text-sm ${
            currentPage === 1
              ? "text-gray-400 bg-gray-100"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-3 py-1 text-gray-400 text-sm">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`px-1.5 md:px-3 py-1 rounded-md text-sm ${
                page === currentPage
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md text-sm ${
            currentPage === totalPages
              ? "text-gray-400 bg-gray-100"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
