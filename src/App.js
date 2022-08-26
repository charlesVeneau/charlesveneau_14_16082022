import './App.css';
import Logo from './assets/logoPNG.png';
import { Routes, Route } from 'react-router-dom';
import { UserAddIcon } from '@heroicons/react/outline';
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
      <aside className="col-span-1">
        <h1 className="text-3xl font-bold text-green-800">
          <img src={Logo} alt="WealthHealt" className="h-16 inline" />
          HRNet
        </h1>
        <ul>
          <li>
            <NavLink to="/">
              <UserAddIcon className="h-6 w-6" /> New employee
            </NavLink>
          </li>
          <li>
            <NavLink to="employees">Employees list</NavLink>
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
