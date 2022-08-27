import './App.css';
import Logo from './assets/logoPNG.png';
import { Routes, Route } from 'react-router-dom';
import { UserAddIcon } from '@heroicons/react/outline';
import { UserGroupIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import Employee from './Pages/Employee';
import Employees from './Pages/Employees';

function App() {
  return (
    <div className="App grid grid-cols-4 h-screen bg-slate-300">
      {/* What I want?
     2 columns
     the left one contains a header with the logo and the name of the website (HRNet)
     A vertical list of two Navlinks
     the first one to the create employee
     the second to the employee's list of

     The right column will display either the new employee form or the employee's list */}
      <aside className="col-span-1 p-2 pt-4">
        <h1 className="text-3xl font-bold text-gray-700 flex align-center gap-2 mb-6 ">
          <img
            src={Logo}
            alt="WealthHealt"
            className="h-10 w-10 inline align-middle "
          />
          HRNet
        </h1>
        <ul>
          <li>
            <NavLink
              to="/"
              className="inline-flex text-gray-700 align-center gap-2 p-2 pr-4 mb-3 hover:bg-slate-50 hover:text-green-600 rounded-md active:bg-white active:text-green-600 transition-colors"
            >
              <UserAddIcon className="h-6 w-6 inline" /> New employee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="employees"
              className="inline-flex text-gray-700 align-center gap-2 p-2 pr-4 mb-3 hover:bg-slate-50 hover:text-green-600 rounded-md active:bg-white active:text-green-600 transition-colors"
            >
              <UserGroupIcon className="h-6 w-6 inline" />
              Employees list
            </NavLink>
          </li>
        </ul>
      </aside>
      <article className="col-span-3">
        <Routes>
          <Route path="" element={<Employee />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </article>
    </div>
  );
}

export default App;
