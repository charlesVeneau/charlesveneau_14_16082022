import { useMemo, useState, useContext } from 'react';
import { UsersContext } from '../../utils/context';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import { COLUMNS } from '../Columns';
import GlobalFilter from '../../Components/GlobalFilter';
import ChevronUpDownIcon from '../../assets/ChevronUpDownIcon.svg';
import ChevronUpIcon from '../../assets/ChevronUpIcon.svg';
import ChevronDownIcon from '../../assets/ChevronDownIcon.svg';

/**
 * The Table function is a React component that uses the useTable hook from the react-table library to
 * render a table
 */
function Table() {
  const [modalOpen, setModalOpen] = useState(false);
  const usersContext = useContext(UsersContext);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => usersContext.users, [usersContext]);

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

  /**
   * If the modal is open, close it. If the modal is closed, open it
   */
  function toggleModal(event) {
    setModalOpen(() => !modalOpen);
  }
  return (
    <>
      <div className=" mt-8 xl:mt-16 flex flex-col gap-3 sm:flex-row items-start sm:justify-between my-4 sm:items-center">
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
        <div className="flex gap-4 items-center justify-between sm:w-auto w-full">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <div className="relative shadow">
            <button
              className="rounded-lg inline-flex items-center bg-white hover:text-green-600 focus:outline-none focus:shadow-outline text-gray-500 font-semibold py-2 px-2 md:px-4"
              onClick={toggleModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:hidden"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
              </svg>
              <span className="hidden md:block">Display</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              className={`z-40 absolute top-0 right-0 w-40 bg-white rounded-lg shadow-lg mt-12 -mr-1 py-1 overflow-hidden ${
                modalOpen ? 'block' : 'hidden'
              }`}
            >
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
                  <label className="flex justify-start items-center text-truncate hover:bg-green-100 px-4 py-2 cursor-pointer ">
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
                    className="bg-gray-200 sticky top-0 border-b border-gray-300 px-4 py-2 text-gray-700 font-semibold uppercase cursor-pointer text-left"
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
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between my-4">
        <div className="pageBlock">
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <label htmlFor="pageOptions">
            | Go to page:{' '}
            <input
              className="w-12 m-0 p-1"
              id="pageOptions"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
            />
          </label>
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
