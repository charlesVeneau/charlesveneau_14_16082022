import Logo from '../../assets/logoPNG.png';
import { UserAddIcon, UserGroupIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <aside className="navbar">
      <NavLink to="form">
        <h1 className="text-center hidden sm:text-2xl md:text-3xl sm:flex sm:align-center gap-2 xl:mb-6 font-bold text-gray-900 ">
          <img
            src={Logo}
            alt="WealthHealt"
            className=" h-8 md:h-10 inline align-middle "
          />
          <span className="">HRNet</span>
        </h1>
      </NavLink>
      <ul className="flex xl:block justify-center gap-3">
        <li className="flex-grow">
          <NavLink to="form">
            <UserAddIcon className="h-6 w-6 inline" />{' '}
            <span className="">New employee</span>
          </NavLink>
        </li>
        <li className="flex-grow">
          <NavLink to="employees">
            <UserGroupIcon className="h-6 w-6 inline" />
            <span className="">Employees list</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Navbar;
