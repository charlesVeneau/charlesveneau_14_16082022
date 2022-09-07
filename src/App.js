import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Form from './Pages/Form';
import Employees from './Pages/Employees';

function App() {
  return (
    <div className="App grid grid-cols-4 bg-slate-200">
      <Navbar />
      <Routes>
        <Route path="" element={<Form />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
