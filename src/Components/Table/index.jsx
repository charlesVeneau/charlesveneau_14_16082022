import { useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import USERS from '../../data/USERS.json';
import { COLUMNS } from '../Columns';
import GlobalFilter from '../../Components/GlobalFilter';
import ChevronUpDownIcon from '../../assets/ChevronUpDownIcon.svg';
import ChevronUpIcon from '../../assets/ChevronUpIcon.svg';
import ChevronDownIcon from '../../assets/ChevronDownIcon.svg';
//import './style.css';

function Table() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => USERS, []);

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
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
    allColumns,
    getToggleHideAllColumnsProps,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className=" mt-8 md:mt-16 flex justify-between my-4 items-center">
        <select
          name="pageSize"
          className="p-1 rounded-md"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option value={pageSize} key={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <div className="flex gap-4 items-center">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <div className="relative shadow">
            <button className="rounded-lg inline-flex items-center bg-white hover:text-green-600 focus:outline-none focus:shadow-outline text-gray-500 font-semibold py-2 px-2 md:px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:hidden"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
              </svg>
              <span className="hidden md:block">Display</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 ml-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="z-40 absolute top-0 right-0 w-40 bg-white rounded-lg shadow-lg mt-12 -mr-1 block py-1 overflow-hidden">
              <div>
                <label
                  htmlFor="toggleAll"
                  className="flex justify-start items-center text-truncate hover:bg-green-100 px-4 py-2 cursor-pointer"
                >
                  <div className="text-green-600 mr-3">
                    <input
                      type="checkbox"
                      id="toggleAll"
                      className="w-8 m-0 form-checkbox focus:outline-none focus:shadow-outline"
                      {...getToggleHideAllColumnsProps()}
                    />
                  </div>
                  Toggle All
                </label>
              </div>
              {allColumns.map((column) => (
                <div key={column.id}>
                  <label className="flex justify-start items-center text-truncate hover:bg-green-100 px-4 py-2 cursor-pointer">
                    <div className="text-green-600 mr-3">
                      <input
                        className="w-8 m-0 form-checkbox focus:outline-none focus:shadow-outline"
                        type="checkbox"
                        {...column.getToggleHiddenProps()}
                      />
                    </div>
                    {column.Header}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
        <table {...getTableProps()} id="users">
          <thead className="h-11">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="bg-gray-200 sticky top-0 border-b border-gray-300 px-4 py-2 text-gray-600 font-bold uppercase cursor-pointer text-left"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render('Header')}
                    <img
                      alt=""
                      className={`ml-3 inline ${
                        column.isSorted ? 'h-4' : 'h-6'
                      }`}
                      src={
                        column.isSorted
                          ? column.isSortedDesc
                            ? ChevronDownIcon
                            : ChevronUpIcon
                          : ChevronUpDownIcon
                      }
                    />
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr className="table-row h-10" {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td className="pl-2" {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between my-4">
        <div className="pageBlock">
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <input
              className="w-12 m-0 p-1"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
            />
          </span>
        </div>
        <div className="pageBlock">
          <button
            className="table-pageBtn"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {'<<'}
          </button>
          <button
            className="table-pageBtn"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <button
            className="table-pageBtn"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
          <button
            className="table-pageBtn"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>
        </div>
      </div>
    </>
  );
}

export default Table;
