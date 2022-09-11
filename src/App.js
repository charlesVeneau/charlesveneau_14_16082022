import './App.css';
import { useContext } from 'react';
import { ModalContext } from './utils/context';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';
import Form from './Pages/Form';
import Employees from './Pages/Employees';

function App() {
  const { isSaved } = useContext(ModalContext);

  return (
    <div className="App grid grid-cols-4 bg-slate-200">
      {isSaved ? <Modal /> : null}
      <Navbar />
      <Routes>
        <Route path="" element={<Form />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
