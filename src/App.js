import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Employee from './Pages/Employee';
import Employees from './Pages/Employees';

function App() {
  return (
    <div className="App grid grid-cols-4 h-screen bg-slate-200">
      {/* What I want?
     2 columns
     the left one contains a header with the logo and the name of the website (HRNet)
     A vertical list of two Navlinks
     the first one to the create employee
     the second to the employee's list of

     The right column will display either the new employee form or the employee's list */}
      <Navbar />
      <Routes>
        <Route path="" element={<Employee />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
