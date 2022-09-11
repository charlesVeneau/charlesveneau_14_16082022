import { createContext, useState } from 'react';

export const ModalContext = createContext();

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
