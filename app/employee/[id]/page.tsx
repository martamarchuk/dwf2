import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getEmployeeById, EMPLOYEES } from '../../data/employees';

export async function generateStaticParams() {
  return EMPLOYEES.map((employee) => ({
    id: employee.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const employee = getEmployeeById(id);

  if (!employee) {
    return {
      title: 'Employee Not Found | Digital Workforce',
    };
  }

  return {
    title: `${employee.title} | Digital Workforce`,
    description: employee.description,
    openGraph: {
      title: `${employee.title} | Digital Workforce`,
      description: employee.description,
      images: [employee.imageUrl],
      type: 'website',
    },
  };
}

export default async function EmployeePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const employee = getEmployeeById(id);

  if (!employee) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{employee.title}</h1>
        <p className="text-lg text-slate-600 mb-8">{employee.subtitle}</p>

        <div className="bg-slate-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-slate-700">{employee.description}</p>
        </div>

        <div className="bg-slate-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Functions</h2>
          <ul className="space-y-2">
            {employee.functions.map((func, index) => (
              <li key={index} className="text-slate-700">• {func}</li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Integration Time</h2>
          <p className="text-slate-700">{employee.integrationTime}</p>
        </div>
      </div>
    </div>
  );
}
