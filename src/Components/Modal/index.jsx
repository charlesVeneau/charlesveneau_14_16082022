import { CheckCircleIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from '../../utils/context';

function Modal() {
  const { toggleIsSaved } = useContext(ModalContext);

  return (
    <div
      id="modal-block"
      className="fixed top-0 w-full h-screen flex justify-center items-center overflow-hidden bg-slate-600/75"
    >
      <div
        id="modal-elt"
        className="relative w-3/4 h-auto flex justify-center flex-col items-center bg-white rounded-lg text-gray-700 pb-4 drop-shadow-xl"
      >
        <XIcon
          className="w-6 h-6 absolute top-2 right-2 hover:cursor-pointer hover:scale-125 transition-all origin-center"
          onClick={() => toggleIsSaved()}
        />
        <CheckCircleIcon className="w-1/4 text-green-300" />
        <h3 className="text-2xl font-bold">Success!</h3>
        <p>Employee added successfully!</p>
        <NavLink
          to="employees"
          className="underline underline-offset-4 text-gray-600/40 hover:text-gray-600 transition-colors"
        >
          Employees list
        </NavLink>
      </div>
    </div>
  );
}

export default Modal;
