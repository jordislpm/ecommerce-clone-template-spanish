import { PaginationType } from "../../types"; // or wherever your type is

interface FormatPaginationProps {
  currentPage: number | undefined;
  hasPrev: boolean | undefined;
  hasNext: boolean | undefined;
}

export function formatPagination({
  currentPage,
  hasNext,
  hasPrev,
}: FormatPaginationProps): PaginationType {
  return {
    currentPage: currentPage ?? 0,
    hasNext: hasNext ?? false,
    hasPrev: hasPrev ?? false,
  };
}
