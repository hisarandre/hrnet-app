import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useSortBy, usePagination } from "react-table";
import { COLUMNS } from "./Columns";
import { useSelector } from "react-redux";
import { employeeSelector } from "../features/employee/EmployeeSlice";
import GlobalFilter from "./GlobalFilter";
import SortTable from "./SortTable";
import Pagination from "./Pagination";
import Table from "./Table";

const EmployeeList = () => {
  const employeeList = useSelector(employeeSelector);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => employeeList.employee, [employeeList.employee]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    prepareRow,
    setPageSize,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className="employees-wrapper">
      <SortTable
        pageSize={pageSize}
        setPageSize={setPageSize}
        GlobalFilter={GlobalFilter}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <Table
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        headerGroups={headerGroups}
        page={page}
        prepareRow={prepareRow}
      />

      <Pagination
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </div>
  );
};

export default EmployeeList;
