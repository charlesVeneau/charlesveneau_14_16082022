import { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import USERS from '../../data/USERS.json';
import { COLUMNS } from '../Columns';
import GlobalFilter from '../../Components/GlobalFilter';
import ChevronUpDownIcon from '../../assets/ChevronUpDownIcon.svg';
import ChevronUpIcon from '../../assets/ChevronUpIcon.svg';
import ChevronDownIcon from '../../assets/ChevronDownIcon.svg';
import './style.css';

function Table() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => USERS, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} id="users">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <img
                    alt=""
                    className="w-6 h-6"
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
