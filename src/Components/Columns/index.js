import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Start Date',
    Footer: 'Start Date',
    accessor: 'startDate',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
  },
  {
    Header: 'Department',
    Footer: 'Department',
    accessor: 'department',
  },
  {
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor: 'dateOfBirth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
  },
  {
    Header: 'Street',
    Footer: 'Street',
    accessor: 'street',
  },
  {
    Header: 'City',
    Footer: 'City',
    accessor: 'city',
  },
  {
    Header: 'State',
    Footer: 'State',
    accessor: 'state',
  },
  {
    Header: 'Zip Code',
    Footer: 'Zip Code',
    accessor: 'zipCode',
  },
];
