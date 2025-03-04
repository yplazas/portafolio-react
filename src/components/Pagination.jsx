import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

export default function Pagination({
  totalPages,
  setCurrentPage,
  currentPage,
}) {
  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <GrLinkPrevious />
      </button>
      <span className="dark-theme">
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <GrLinkNext />
      </button>
    </div>
  );
}
