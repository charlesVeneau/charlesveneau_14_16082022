import Logo from '../../assets/logoPNG.png';
import { UserAddIcon, UserGroupIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <aside className="navbar">
      <h1 className="text-center hidden sm:text-2xl md:text-3xl sm:flex sm:align-center gap-2 mb-6 font-bold text-gray-900 ">
        <img
          src={Logo}
          alt="WealthHealt"
          className=" h-8 md:h-10 inline align-middle "
        />
        <span className="">HRNet</span>
      </h1>
      <ul className="flex sm:block justify-center gap-3">
        <li className="flex-grow">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'flex align-center gap-2 p-2 md:pr-4 sm:mb-3 hover:bg-slate-100/90 hover:text-green-600 rounded-md transition-colors bg-slate-100/90 text-green-600 justify-center md:justify-start'
                : 'flex align-center gap-2 p-2 md:pr-4 sm:mb-3 hover:bg-slate-100/90 hover:text-green-600 rounded-md transition-colors text-gray-700 justify-center md:justify-start'
            }
          >
            <UserAddIcon className="h-6 w-6 inline" />{' '}
            <span className="">New employee</span>
          </NavLink>
        </li>
        <li className="flex-grow">
          <NavLink
            to="employees"
            className={({ isActive }) =>
              isActive
                ? 'flex align-center gap-2 p-2 md:pr-4 sm:mb-3 hover:bg-slate-100/90 hover:text-green-600 rounded-md transition-colors bg-slate-100/90 text-green-600 justify-center md:justify-start'
                : 'flex align-center gap-2 p-2 md:pr-4 sm:mb-3 hover:bg-slate-100/90 hover:text-green-600 rounded-md transition-colors text-gray-700 justify-center md:justify-start'
            }
          >
            <UserGroupIcon className="h-6 w-6 inline" />
            <span className="">Employees list</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Navbar;
