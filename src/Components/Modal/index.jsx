import { CheckCircleIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { Fragment, useRef } from 'react';

/**
 * It's a modal that displays a success message when an employee is added
 * @returns A modal component that is rendered when the isSaved state is true.
 */
function Modal({ isOpen, toggleModal }) {
  const closeButton = useRef(null);

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        initialFocus={closeButton}
        onClose={() => toggleModal()}
        id="modal-block"
        className="fixed top-0 w-full h-screen flex justify-center items-center overflow-hidden bg-slate-600/75 z-50"
      >
        <Dialog.Panel
          id="modal-elt"
          className="relative p-6 sm:p-2 w-11/12 sm:w-3/4 h-auto flex justify-center flex-col items-center bg-white rounded-lg text-gray-700 pb-4 drop-shadow-xl"
        >
          <XIcon
            ref={closeButton}
            className="w-6 h-6 absolute top-2 right-2 hover:cursor-pointer hover:scale-125 transition-all origin-center"
            onClick={() => toggleModal()}
          />
          <CheckCircleIcon className="w-28 sm:w-1/4 text-green-300" />
          <Dialog.Title className="text-2xl font-bold">Success!</Dialog.Title>
          <p>Employee added successfully!</p>
          <NavLink
            to="employees"
            className="underline underline-offset-4 text-gray-600/40 hover:text-gray-600 transition-colors"
            onClick={() => toggleModal()}
          >
            Employees list
          </NavLink>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}

export default Modal;
