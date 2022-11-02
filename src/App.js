import './App.css';
import React, { useContext } from 'react';
import { ModalContext } from './utils/context';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Form from './Pages/Form';
import Employees from './Pages/Employees';
import Error from './Pages/Error';
import { Modal } from 'cv-custom-modal';

/**
 * We're using the `useContext` hook to get the `isSaved` state from the `ModalContext` context
 * @returns The App component is being returned.
 */
function App() {
  const { isOpen, closeModal } = useContext(ModalContext);

  const content = {
    link: 'employees',
    linkText: 'Employees list',
    modalTitle: 'Error !',
    modalText: 'Employee added successfully!',
    status: 'success',
  };

  return (
    <div className="App">
      <Navbar />
      <Modal isOpen={isOpen} closeModal={closeModal} content={content} />
      <Routes>
        <Route index element={<Form />} />
        <Route path="/form" element={<Form />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
