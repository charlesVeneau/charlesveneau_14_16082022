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
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div>
        <div>
          <label htmlFor="toggleAll">
            <input
              type="checkbox"
              id="toggleAll"
              {...getToggleHideAllColumnsProps()}
            />
            Toggle All
          </label>
        </div>
        <div>
          {allColumns.map((column) => (
            <div key={column.id}>
              <label>
                <input type="checkbox" {...column.getToggleHiddenProps()} />
                {column.Header}
              </label>
            </div>
          ))}
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
      <div>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to pag:{' '}
          <input
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
        <select
          name="pageSize"
          id=""
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option value={pageSize} key={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
      </div>
    </>
  );
}

export default Table;
