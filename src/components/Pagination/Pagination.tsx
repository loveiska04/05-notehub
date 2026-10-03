import type { ComponentType } from "react";
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";

type ModuleWithDefault<T> = { default: T };

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

import css from './Pagination.module.css';

interface PaginationProps {
  totalNumberOfPages: number;
  currentPage: number;
  onPageChange: (selected: number ) => void;
}

export default function Pagination({ totalNumberOfPages, currentPage, onPageChange }: PaginationProps) {
  return (
    <div className={css.pagination}>
      <ReactPaginate
        pageCount={totalNumberOfPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => onPageChange(selected + 1)}
        forcePage={currentPage - 1}
        containerClassName={css.pagination}
        activeClassName={css.active}
        nextLabel="→"
        previousLabel="←"
      />
    </div>
  );
}

// GET https://notehub-public.goit.study/api/notes?page=1&perPage=12