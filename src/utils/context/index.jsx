import { createContext, useState } from 'react';
import USERS from '../../data/USERS.json';

/* Creating a context object. */
export const ModalContext = createContext();

/**
 * It's a React component that provides a context value to its children
 * @returns The ModalProvider is returning the ModalContext.Provider with the value of isSaved and
 * toggleIsSaved.
 */
export const ModalProvider = ({ children }) => {
  const [isSaved, setIsSaved] = useState(false);

  function toggleIsSaved() {
    setIsSaved((isSaved) => !isSaved);
  }

  return (
    <ModalContext.Provider value={{ isSaved, toggleIsSaved }}>
      {children}
    </ModalContext.Provider>
  );
};

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const localStorageUsers = () => {
    if (!localStorage.getItem('savedUsers')) {
      localStorage.setItem('savedUsers', JSON.stringify(USERS));
    }
    return JSON.parse(localStorage.getItem('savedUsers'));
  };
  const [users, setUsers] = useState(localStorageUsers);

  function addUser(user) {
    setUsers((users) => [...users, user]);
  }

  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
};
