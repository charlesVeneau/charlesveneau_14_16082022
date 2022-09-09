import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';
import Form from './Pages/Form';
import Employees from './Pages/Employees';

function App() {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="App grid grid-cols-4 bg-slate-200">
      {isAdded ? <Modal /> : null}
      <Navbar />
      <Routes>
        <Route path="" element={<Form />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
