import { useParams, Navigate } from 'react-router-dom';
import EmployeeDetail from '../components/EmployeeDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getEmployeeById } from '../data/employees';

export default function EmployeePage() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to="/" replace />;
  }

  const employeeData = getEmployeeById(id);

  if (!employeeData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <EmployeeDetail {...employeeData} />
      <Footer />
    </div>
  );
}
