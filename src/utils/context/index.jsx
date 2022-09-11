import { createContext, useState } from 'react';

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
    setIsSaved(!isSaved);
  }

  return (
    <ModalContext.Provider value={{ isSaved, toggleIsSaved }}>
      {children}
    </ModalContext.Provider>
  );
};
