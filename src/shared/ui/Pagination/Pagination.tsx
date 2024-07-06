import { FC } from "react";
import { Pagination as MuiPagination } from "@mui/material";

import { StyledPaginationBox } from "./Pagination.styles";

interface PaginationProps {
  total: number;
  currentPage: number;
  itemsOnPage: number;
  onPageChange: (page: number) => void;
  sticky?: boolean;
}

export const Pagination: FC<PaginationProps> = ({
  total,
  currentPage,
  itemsOnPage,
  onPageChange,
  sticky,
}) => {
  const pageCount = Math.ceil(total / itemsOnPage);

  return (
    <StyledPaginationBox sticky={sticky}>
      <MuiPagination
        count={pageCount}
        page={currentPage}
        onChange={(_, page) => onPageChange(page)}
      />
    </StyledPaginationBox>
  );
};
