import Logo from '../../assets/logoPNG.png';
import { UserAddIcon, UserGroupIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <aside className="col-span-1 p-2 pt-4">
      <h1 className="text-3xl font-bold text-gray-900 flex align-center gap-2 mb-6 ">
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
            className={({ isActive }) =>
              isActive
                ? 'flex align-center gap-2 p-2 pr-4 mb-3 hover:bg-slate-100/90 hover:text-green-600 rounded-md transition-colors bg-slate-100/90 text-green-600'
                : 'flex align-center gap-2 p-2 pr-4 mb-3 hover:bg-slate-100/90 hover:text-green-600 rounded-md transition-colors text-gray-700'
            }
          >
            <UserAddIcon className="h-6 w-6 inline" /> New employee
          </NavLink>
        </li>
        <li>
          <NavLink
            to="employees"
            className={({ isActive }) =>
              isActive
                ? 'flex align-center gap-2 p-2 pr-4 mb-3 hover:bg-slate-100/90 hover:text-green-600 rounded-md transition-colors bg-slate-100/90 text-green-600'
                : 'flex align-center gap-2 p-2 pr-4 mb-3 hover:bg-slate-100/90 hover:text-green-600 rounded-md transition-colors text-gray-700'
            }
          >
            <UserGroupIcon className="h-6 w-6 inline" />
            Employees list
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Navbar;
