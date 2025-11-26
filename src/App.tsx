import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EmployeePage from './pages/EmployeePage';
import Robots from './components/Robots';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee/:id" element={<EmployeePage />} />
        <Route path="/robots.txt" element={<Robots />} />
      </Routes>
    </Router>
  );
}

export default App;
