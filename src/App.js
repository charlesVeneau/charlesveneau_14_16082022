import './App.css';
import { useContext } from 'react';
import { ModalContext } from './utils/context';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';
import Form from './Pages/Form';
import Employees from './Pages/Employees';

/**
 * We're using the `useContext` hook to get the `isSaved` state from the `ModalContext` context
 * @returns The App component is being returned.
 */
function App() {
  const { isSaved, toggleIsSaved } = useContext(ModalContext);

  return (
    <div className="App grid grid-cols-4 bg-slate-200">
      <Navbar />
      <Routes>
        <Route path="" element={<Form />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
      <Modal isOpen={isSaved} toggleModal={toggleIsSaved} />
    </div>
  );
}

export default App;
